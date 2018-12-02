declare module 'react-native-draggable-flatlist' {
  import React, { ReactNode } from 'react'
  import { FlatListProps } from 'react-native'

  interface RenderItemProps<T> {
    item: T
    index: number
    move: () => void
    moveEnd: () => void
    isActive: boolean

    separators: {
      highlight: () => void
      unhighlight: () => void
      updateProps: (select: 'leading' | 'trailing', newProps: any) => void
    }
  }

  interface OnMoveEndProps<T> {
    data: T[]
    to: number
    from: number
    row: T
  }

  export interface DraggableFlatListProps<T> {
    data: T[] | null
    renderItem: (props: RenderItemProps<T>) => React.ReactElement<any> | null
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement<any> | null;
    ListEmptyComponent?: React.ComponentType<any> | React.ReactElement<any> | null;
    keyExtractor?: (item: T, index: number) => string;
    horizontal?: boolean
    scrollPercent?: number
    keyboardDismissMode?: "none" | "interactive" | "on-drag";
    keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled";
    onMoveEnd?: (props: OnMoveEndProps<T>) => void
    onMoveBegin?: (index: number) => void
  }

  export default class DraggableFlatList<T> extends React.Component<DraggableFlatListProps<T>, any> {}
}
