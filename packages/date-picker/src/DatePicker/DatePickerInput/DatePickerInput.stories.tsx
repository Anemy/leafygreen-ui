/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { StoryFn } from '@storybook/react';
import { isValid } from 'date-fns';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { StoryMetaType } from '@leafygreen-ui/lib';
import { Size } from '@leafygreen-ui/tokens';

import {
  DatePickerContextProps,
  DatePickerProvider,
} from '../../DatePickerContext';

import { DatePickerInput } from './DatePickerInput';

const ProviderWrapper = (Story: StoryFn, ctx?: { args: any }) => (
  <LeafyGreenProvider darkMode={ctx?.args.darkMode}>
    <DatePickerProvider
      value={{
        ...ctx?.args,
      }}
    >
      <Story />
    </DatePickerProvider>
  </LeafyGreenProvider>
);

const meta: StoryMetaType<typeof DatePickerInput, DatePickerContextProps> = {
  title: 'Components/DatePicker/DatePickerInput',
  component: DatePickerInput,
  decorators: [ProviderWrapper],
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
        value: [null, new Date('1993-12-26')],
        dateFormat: ['iso8601', 'en-US', 'en-UK', 'de-DE'],
        timeZone: ['UTC', 'Europe/London', 'America/New_York', 'Asia/Seoul'],
        size: Object.values(Size),
      },
      excludeCombinations: [
        {
          timeZone: ['Europe/London', 'America/New_York', 'Asia/Seoul'],
          value: null,
        },
      ],
      decorator: ProviderWrapper,
    },
  },
  args: {
    label: 'Label',
    dateFormat: 'en-UK',
    timeZone: 'Europe/London',
  },
  argTypes: {
    value: { control: 'date' },
  },
};

export default meta;

export const Basic: StoryFn<typeof DatePickerInput> = props => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (props.value && isValid(new Date(props.value))) {
      setDate(new Date(props.value));
    }
  }, [props.value]);

  const updateDate = (date: Date | null) => {
    setDate(date);
  };

  return (
    <>
      <DatePickerInput {...props} value={date} setValue={updateDate} />
    </>
  );
};

export const Generated = () => {};
