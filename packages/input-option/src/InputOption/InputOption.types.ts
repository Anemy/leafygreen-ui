import { PropsWithChildren } from 'react';

import { AriaLabelProps } from '@leafygreen-ui/a11y';
import { DarkModeProps } from '@leafygreen-ui/lib';

const ActionType = {
  Default: 'default',
  Destructive: 'destructive',
} as const;

type ActionType = (typeof ActionType)[keyof typeof ActionType];

export { ActionType };

// InputOption components receive different styling and have different variants available to them
// Therefore, we need to care about where the component is rendered to determine how to render the component appropriately.
const RenderedContext = {
  Form: 'form',
  Menu: 'menu',
} as const;

type RenderedContext = (typeof RenderedContext)[keyof typeof RenderedContext];

export { RenderedContext };

const State = {
  Default: 'default',
  Hover: 'hover',
  Highlight: 'highlight',
  Disabled: 'disabled',
  Checked: 'checked',
  Destructive: 'destructive',
} as const;

type State = (typeof State)[keyof typeof State];

export { State };

export type FormState = Exclude<State, 'destructive'>;

/**
 * TERMINOLOGY
 *
 * `highlighted`: The element is aria-selected or "focused" via keyboard navigation
 * (Does not mean `:focus`, since input options may not be focused in this sense)
 *
 * `checked`: The element is selected, or otherwise active (including `:active`)
 */
export interface BaseInputOptionProps {
  /**
   * Prevents the option from being selectable.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the currently highlighted option element for keyboard navigation.
   * Not to be confused with `selected`, which identifies the currently selected option
   * @default false
   */
  highlighted?: boolean;

  /**
   * Whether the component is checked, regardless of keyboard navigation
   */
  checked?: boolean;

  /**
   * Whether a wedge displays on the left side of the item
   * when the element is highlighted or selected
   * @default true
   */
  showWedge?: boolean;

  /**
   * Determines whether to show hover, highlight and selected styles
   * @default true
   */
  isInteractive?: boolean;

  /**
   * Styles input based on intended action
   * @default 'default'
   */
  actionType?: ActionType;

  /**
   * Determines how the items are styled
   */
  renderedContext?: RenderedContext;
}

export type InputOptionProps = AriaLabelProps &
  DarkModeProps &
  PropsWithChildren<BaseInputOptionProps>;
