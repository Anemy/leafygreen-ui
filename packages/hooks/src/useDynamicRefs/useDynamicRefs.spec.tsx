import { renderHook } from '@testing-library/react-hooks';

import { consoleOnce } from '@leafygreen-ui/lib';

import { DynamicRefGetter, useDynamicRefs } from '.';

describe('packages/hooks/useDynamicRefs', () => {
  test('returns a ref getter function', () => {
    const { result } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
    expect(typeof result.current).toBe('function');
  });

  test('returns identical getter when rerendered ', () => {
    const { result, rerender } = renderHook(v => useDynamicRefs(v), {
      initialProps: { prefix: 'A' },
    });
    rerender();
    expect(result.all[0]).toBe(result.all[1]);
  });

  test('returns unique getters when called with the same prefix', () => {
    const { result: A } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
    const { result: B } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
    expect(A.current).not.toBe(B.current);
  });

  test('returns unique getters when called with different prefixes', () => {
    const { result: A } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
    const { result: B } = renderHook(() => useDynamicRefs({ prefix: 'B' }));
    expect(A.current).not.toBe(B.current);
  });

  test('returns unique getters when rerendered with a different prefix', () => {
    const { result, rerender } = renderHook(v => useDynamicRefs(v), {
      initialProps: { prefix: 'A' },
    });
    rerender({ prefix: 'B' });
    expect(result.all[0]).not.toBe(result.all[1]);
  });

  describe('ref getter function', () => {
    test('returns a ref when called with a key', async () => {
      const { result } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
      const ref = result.current('key');
      expect(ref).toHaveProperty('current');
    });

    test('returns `undefined` when called without a key', () => {
      const { result } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
      const getter: DynamicRefGetter<unknown> = result.current;
      const ref = getter();
      expect(ref).toBeUndefined();
    });

    test('logs an error when called without a key', () => {
      const error = jest
        .spyOn(consoleOnce, 'error')
        .mockImplementation(() => {});
      const { result } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
      result.current();
      expect(error).toHaveBeenCalled();
    });

    test('returns identical refs when called with the same key', () => {
      const { result } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
      const ref1 = result.current('key');
      const ref2 = result.current('key');
      expect(ref1).toBe(ref2);
    });

    test('returns identical refs when rerendered', () => {
      const { result, rerender } = renderHook(v => useDynamicRefs(v), {
        initialProps: { prefix: 'A' },
      });
      const ref1 = result.current('key');
      rerender();
      const ref2 = result.current('key');
      expect(ref1).toBe(ref2);
    });

    test('returns unique refs when the hook is called twice with the same prefix', () => {
      // This avoids collisions
      const { result: A1 } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
      const { result: A2 } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
      const ref1 = A1.current('key');
      const ref2 = A2.current('key');
      expect(ref1).not.toBe(ref2);
    });

    test('returns unique refs when unique getters are called with the same key', () => {
      const { result: A } = renderHook(() => useDynamicRefs({ prefix: 'A' }));
      const { result: B } = renderHook(() => useDynamicRefs({ prefix: 'B' }));
      const refA = A.current('key');
      const refB = B.current('key');
      expect(refA).not.toBe(refB);
    });

    test('returns unique refs when rerendered with a different prefix', () => {
      const { result, rerender } = renderHook(v => useDynamicRefs(v), {
        initialProps: { prefix: 'A' },
      });
      const ref1 = result.current('key');
      rerender({ prefix: 'B' });
      const ref2 = result.current('key');
      expect(ref1).not.toBe(ref2);
    });
  });
});
