export const CalendarCellState = {
  Default: 'default',
  Active: 'active',
  Start: 'start',
  End: 'end',
  Range: 'range',
  Disabled: 'disabled',
} as const;

export type CalendarCellState =
  (typeof CalendarCellState)[keyof typeof CalendarCellState];

export interface CalendarCellProps
  extends React.HTMLProps<HTMLTableCellElement> {
  /** The current state of the cell */
  state: CalendarCellState;

  /** Whether the cell represents the current date */
  isCurrent?: boolean;

  /**
   * Whether the cell should display hovered/highlighted styles.
   * This is used to programmatically set highlight when using keyboard navigation
   */
  isHighlighted?: boolean;
}
