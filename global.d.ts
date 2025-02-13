declare module '@ali/react-zongheng' {
  import { ActiveSheetChangedEvent } from '@ali/zongheng-types';
  import { AlignCommand } from '@ali/zongheng-types';
  import { APIException } from '@ali/zongheng-types';
  import { IAPIExceptionCode as APIExceptionCode } from '@ali/zongheng-types';
  import { IAPIExceptionReason as APIExceptionReason } from '@ali/zongheng-types';
  import { AutofillCommand } from '@ali/zongheng-types';
  import { BorderStyle } from '@ali/zongheng-types';
  import { BorderType } from '@ali/zongheng-types';
  import { BrushCommand } from '@ali/zongheng-types';
  import { CalculatedEvent } from '@ali/zongheng-types';
  import { CCPCommand } from '@ali/zongheng-types';
  import { CellExtension as CellExtension_2 } from '@ali/zongheng-types';
  import { CellStyleCommand } from '@ali/zongheng-types';
  import { CellTipCommand } from '@ali/zongheng-types';
  import { CellValue } from '@ali/zongheng-types';
  import { ChartCommand } from '@ali/zongheng-types';
  import { CheckboxCellCommand } from '@ali/zongheng-types';
  import { ClearCommand } from '@ali/zongheng-types';
  import { Color } from '@ali/zongheng-types';
  import { ColumnDeletedEvent } from '@ali/zongheng-types';
  import { ColumnInsertedEvent } from '@ali/zongheng-types';
  import { ColumnTypeCommand } from '@ali/zongheng-types';
  import { ColumnWidthChangedEvent } from '@ali/zongheng-types';
  import { CommandKey } from '@ali/zongheng-types';
  import { commandKeys } from '@ali/zongheng-types';
  import { ComponentProps } from 'react';
  import { ConditionalFormatCommand } from '@ali/zongheng-types';
  import { ConditionalFormatRule } from '@ali/zongheng-types';
  import { ConditionalFormatRuleBuilder } from '@ali/zongheng-types';
  import { ConditionalFormattingDataBarCondition } from '@ali/zongheng-types';
  import { ConditionalFormattingDuplicateCondition } from '@ali/zongheng-types';
  import { ConditionalFormattingEmptyCondition } from '@ali/zongheng-types';
  import { ConditionalFormattingErrorCondition } from '@ali/zongheng-types';
  import { ConditionalFormattingFormulaCondition } from '@ali/zongheng-types';
  import { ConditionalFormattingIconSetCondition } from '@ali/zongheng-types';
  import { ConditionalFormattingNumberCondition } from '@ali/zongheng-types';
  import { ConditionalFormattingTextCondition } from '@ali/zongheng-types';
  import { Controller } from '@ali/zongheng-types';
  import { CopyPasteAction } from '@ali/zongheng-types';
  import { CopyPasteType } from '@ali/zongheng-types';
  import { CoreExtension } from '@ali/zongheng-types';
  import { DataStore } from '@ali/zongheng-types';
  import { dataStoreReactUtil } from '@ali/zongheng-types';
  import { dataStoreUtil } from '@ali/zongheng-types';
  import { DataValidationCommand } from '@ali/zongheng-types';
  import { DateCellCommand } from '@ali/zongheng-types';
  import { DEFAULT_FORMATS } from '@ali/zongheng-types';
  import { DeleteDimensionCommand } from '@ali/zongheng-types';
  import { DimensionVisibleCommand } from '@ali/zongheng-types';
  import { ESelectionsMode } from '@ali/zongheng-types';
  import { Eventer } from '@ali/zongheng-types';
  import { ExtensionBase } from '@ali/zongheng-types';
  import { Filter } from '@ali/zongheng-types';
  import { FilterCommand } from '@ali/zongheng-types';
  import { FilterCondition } from '@ali/zongheng-types';
  import { FilterCriteria } from '@ali/zongheng-types';
  import { FilterCriteriaBuilder } from '@ali/zongheng-types';
  import { FilterCriteriaInstance } from '@ali/zongheng-types';
  import { FloatExtension as FloatExtension_2 } from '@ali/zongheng-types';
  import { FloatExtensionObjectDeletedEvent } from '@ali/zongheng-types';
  import { FloatExtensionObjectInsertedEvent } from '@ali/zongheng-types';
  import { FormatPainterState } from '@ali/zongheng-types';
  import { FormulaCommand } from '@ali/zongheng-types';
  import { FrozenCommand } from '@ali/zongheng-types';
  import { GridCommand } from '@ali/zongheng-types';
  import { GroupCommand } from '@ali/zongheng-types';
  import { HighlightCommand } from '@ali/zongheng-types';
  import { HighlightDuplicateCommand } from '@ali/zongheng-types';
  import type { ICalcSettings } from '@ali/zongheng-calc-pipeline';
  import { IEditorProps } from '@ali/react-zongheng-core';
  import { IFloatElementContextMenuEvent } from '@ali/react-zongheng-core';
  import { IgnoredErrorCommand } from '@ali/zongheng-types';
  import { IH5ContextMenuEvent } from '@ali/react-zongheng-core';
  import { ImageCommand } from '@ali/zongheng-types';
  import { ImageLoader } from '@ali/react-zongheng-core';
  import { IMenuItem } from '@ali/zongheng-types';
  import { IMobileSheetContext } from '@ali/zongheng-types';
  import { InsertDimensionCommand } from '@ali/zongheng-types';
  import { IRangePickerHandler } from '@ali/zongheng-types';
  import { IRangePickerProps } from '@ali/zongheng-types';
  import { ISearchCondition } from '@ali/zongheng-types';
  import { ISharedState } from '@ali/zongheng-types';
  import { ISheetRange } from '@ali/zongheng-types';
  import { LinkCellCommand } from '@ali/zongheng-types';
  import { Menu } from '@ali/zongheng-types';
  import { Menubar } from '@ali/zongheng-types';
  import { MergeCellsCommand } from '@ali/zongheng-types';
  import { MobileSheetApplicationProvider as MobileSheetApplicationProvider_2 } from '@ali/zongheng-types';
  import { MobileTextEditor } from '@ali/zongheng-types';
  import { BottomBarTabEnum as MobileToolbarEnum } from '@ali/zongheng-types';
  import { ModalLayoutContent as ModalLayout } from '@ali/zongheng-types';
  import { NumberFormatCommand } from '@ali/zongheng-types';
  import { PasteEvent } from '@ali/zongheng-types';
  import { PivotTableCommand } from '@ali/zongheng-types';
  import { PureSheetApplication } from '@ali/zongheng-types';
  import { Range as Range_2 } from '@ali/zongheng-types';
  import { RangeExtension as RangeExtension_2 } from '@ali/zongheng-types';
  import { RangeExtensionReaderWriter } from '@ali/zongheng-types';
  import { RangeList } from '@ali/zongheng-types';
  import { RangePicker } from '@ali/zongheng-types';
  import { RangePickerGlobalModal } from '@ali/zongheng-types';
  import { default as React_2 } from 'react';
  import type { ReactNode } from 'react';
  import { ReadonlyChangedEvent } from '@ali/zongheng-types';
  import { ResizeDimensionCommand } from '@ali/zongheng-types';
  import { RichTextEditorCommand } from '@ali/zongheng-types';
  import { RightPanel } from '@ali/zongheng-types';
  import { RowDeletedEvent } from '@ali/zongheng-types';
  import { RowHeightChangedEvent } from '@ali/zongheng-types';
  import { RowInsertedEvent } from '@ali/zongheng-types';
  import { ScaleCommand } from '@ali/zongheng-types';
  import { IScroll as ScrollEvent } from '@ali/zongheng-types';
  import { SearchReplaceCommand } from '@ali/zongheng-types';
  import { SelectCellCommand } from '@ali/zongheng-types';
  import { SelectionChangedEvent } from '@ali/zongheng-types';
  import { SelectionSummaryCommand } from '@ali/zongheng-types';
  import { Sheet } from '@ali/zongheng-types';
  import { SheetApplicationProvider as SheetApplicationProvider_2 } from '@ali/zongheng-types';
  import { SheetExtension as SheetExtension_2 } from '@ali/zongheng-types';
  import { SheetHandler } from '@ali/react-zongheng-core';
  import { SheetRemovedEvent } from '@ali/zongheng-types';
  import { SheetTabs } from '@ali/zongheng-types';
  import { SheetUtils } from '@ali/zongheng-types';
  import { SignatureCommand } from '@ali/zongheng-types';
  import { SortCommand } from '@ali/zongheng-types';
  import { StickyFrozenCommand } from '@ali/zongheng-types';
  import { Toolbar } from '@ali/zongheng-types';
  import { ToolbarConfig } from '@ali/zongheng-types';
  import { UndoRedoCommand } from '@ali/zongheng-types';
  import { useApplicationConfig } from '@ali/zongheng-types';
  import { useApplicationContext } from '@ali/zongheng-types';
  import { useCommandSharedSelector as useSharedSelector } from '@ali/zongheng-types';
  import { VStyle } from '@ali/zongheng-types';
  import { WordWrapCommand } from '@ali/zongheng-types';
  import { Workbook } from '@ali/zongheng-types';
  import { ZHEvents } from '@ali/zongheng-types';

  export { ActiveSheetChangedEvent }

  export { AlignCommand }

  export { APIException }

  export { APIExceptionCode }

  export { APIExceptionReason }

  export { AutofillCommand }

  export { BorderStyle }

  export { BorderType }

  export { BrushCommand }

  declare type CalcSettings = Pick<ICalcSettings, 'taskConfig' | 'iterativeCalc' | 'calcMode'>;

  export { CalculatedEvent }

  export { CCPCommand }

  export declare class RangeExtensionReaderWriter<T = unknown> {
    id: string;
    private readonly extensionKey;
    private readonly sheet;
    constructor(sheet: Sheet, id: string, extensionKey: string);
    getExtensionKey(): string;
    getRange(): Range | null | undefined;
    read(): T | null;
    write(model: T): this;
    remove(): void;
    updateRange(row: number, column: number, rowCount: number, columnCount: number): this;
}

  declare type IReturnShowFun = {
    hide: () => void;
  };

  declare type LayoutHideFun = (key?: string | string[]) => void;

  declare type IRightPanelItemConfig = {
    title: string;
    content: React.ReactNode;
    keepAlive?: boolean;
    onClose?: () => (undefined | boolean | Promise<boolean>);
  } | {
      type: 'custom';
      width: number;
      content: React.ReactNode;
  };

  declare type IModalConfig = {
    type: 'custom';
    content: React.ReactNode | React.ReactElement;
} | {
    type?: 'default';
    content: React.ReactNode | React.ReactElement;
    mask?: boolean | 'transparent' | undefined;
    dragMove?: boolean;
    dragResize?: boolean | {
        maxWith?: number | undefined;
        minWidth?: number | undefined;
        maxHeigh?: number | undefined;
        minHeigh?: number | undefined;
    };
    wrapperStyle?: React.CSSProperties;
};

interface ICustomItem {
  type: 'custom';
  content: React.ReactNode;
  key: string;
}

declare type ICustomMenuItem = {
  type: 'custom';
  content: React.ReactNode;
  key: string;
};
declare type IBadge = {
  type: 'new' | 'beta';
  expiration?: Date | null;
} | {
  type: 'count';
  number: number;
} | {
  type: 'text';
  text: string;
  color: string;
  bgColor: string;
} | {
  type: 'custom';
  content: React.ReactNode;
};
declare type IBaseMenuItem = {
  type?: 'default';
  title: string | {
      text: string;
      content: React.ReactNode;
  };
  onSelect: () => void;
  onPathTrigger?: (pathIn: boolean) => void;
  testid?: string;
  disabled?: boolean | string;
  key: string;
  prefix?: React.ReactNode;
  selected?: boolean;
  suffix?: string | React.ReactNode;
  badge?: IBadge;
  hoverTip?: false | string | {
      title?: string;
      description?: string;
      imgSrc?: string;
  } | {
      title: string;
      action: {
          title: string;
          onAction: () => void;
      };
  };
};
declare type IGroupTitle = {
  type: 'groupTitle';
  key: string;
  title: string;
};
declare type ISubMenuChildren = Array<'divider' | IBaseMenuItem | ISubMenuItem | ICustomMenuItem | IGroupTitle>;
declare type ISubMenuItem = {
  key: string;
  type: 'sub';
  title: string | {
      text: string;
      content: React.ReactElement | JSX.Element;
  };
  disabled?: boolean | string;
  badge?: IBadge;
  subMenu: ISubMenuChildren | (() => ISubMenuChildren);
  prefix?: React.ReactNode;
};
declare type IMenuItem = ICustomMenuItem | IBaseMenuItem | ISubMenuItem | IGroupTitle | 'divider';
interface IContextMenuConfig {
  items: IMenuItem[];
  origin?: 'provider' | 'window';
  position: {
      pageX: number;
      pageY: number;
  };
}
  interface IContextLayout {
    showRightPanel: {
        (key: string): IReturnShowFun;
        (opt: IRightPanelItemConfig): IReturnShowFun;
        (key: string, opt: IRightPanelItemConfig): IReturnShowFun;
    };
    hideRightPanel: LayoutHideFun;
    showModal: {
        (opt: IModalConfig): IReturnShowFun;
        (key: string, opt: IModalConfig): IReturnShowFun;
    };
    hideModal: LayoutHideFun;
    showContextMenu: {
        (opt: IContextMenuConfig): IReturnShowFun;
        (key: string, opt: IContextMenuConfig): IReturnShowFun;
    };
    hideContextMenu: {
        (key?: string | string[]): void;
        (key: 'sheetContextMenu' | 'sheetTabContextMenu' | 'floatElemContextMenu'): void;
    };
  }

export interface ICustomItem {
    type: 'custom';
    key: string;
    content: React.ReactElement;
}
export interface ISingleMobileItem {
    key: string;
    type?: 'default';
    title: string;
    icon: React.ReactNode;
    disabled?: boolean;
    disabledTip?: string;
    testid?: string;
    onSelect: () => void;
}
export interface ISingleMobileAction {
    key: string;
    type?: 'default';
    icon: React.ReactNode;
    testid?: string;
    onSelect: (evt: React.TouchEvent) => void;
}
export interface ISingleMobileToolbarItem {
    key: string;
    type?: 'default';
    title: string;
    prefix: React.ReactNode;
    suffix?: React.ReactNode;
    forbidden?: boolean;
    testid?: string;
    onSelect: () => void;
}
export declare type IMobileMenuItem = ISingleMobileItem | ICustomItem;
export declare type IMobileAction = ISingleMobileAction | ICustomItem;
export declare type IMobileToolbarItem = ISingleMobileToolbarItem | ICustomItem;

  declare type ISingleAction = {
    type?: 'default';
    okText?: string;
    cancelText?: string;
    onOk?: (next: () => void) => void;
    onCancel?: (next: () => void) => void;
};
declare type ICustomAction = {
    type: 'custom';
    items: any;
};
  declare type ICustomModalConfig = {
    type: 'custom';
    getContainer?: () => HTMLElement;
    content: ReactNode;
};
export declare type ISingleModalConfig = {
    type?: 'default';
    title?: string;
    getContainer?: () => HTMLElement;
    content?: string | React.ReactNode;
    actions?: ISingleAction | ICustomAction;
    onClose?: (next: () => void) => void;
};
export declare type IMobileModalConfig = ISingleModalConfig | ICustomModalConfig;
declare type ICustomDrawerConfig = {
  type: 'custom';
  content: React.ReactNode;
};
export declare type IDrawerConfig = any | ICustomDrawerConfig;
  interface IMobileContextLayout {
    showModal: {
        (opt: IMobileModalConfig): IReturnShowFun;
        (key: string, opt: IMobileModalConfig): IReturnShowFun;
    };
    showDrawer: {
        (opt: IDrawerConfig): IReturnShowFun;
        (key: string, opt: IDrawerConfig): IReturnShowFun;
    };
    hideModal: LayoutHideFun;
    hideDrawer: LayoutHideFun;
}

declare type ISheetHandler = any;
declare type IEditor = any;

  export interface IMobileContext {
    layout: IMobileContextLayout;
  }
  export interface IApplicationContext {
    layout: IContextLayout;
    mobile: IMobileContext;
    command: {
        findCommand: (C: string) => AbstractCommand | undefined;
        triggerHook: (hookName: string, payload: Record<string, any>, option: {
            canReplay: boolean | 'cover';
        }) => void;
    };
    sheetHandler: ISheetHandler;
    workbook: Workbook;
    sheetPayload: {
        editor: IEditor;
        sheetRef: React.MutableRefObject<ISheetHandler>;
        viewportNodeRef: React.MutableRefObject<HTMLElement | undefined>;
    };
  }

  declare const MAX_SHEET_PERMISSION: number;
  declare const DEFAULT_SHARED_STATE: ISharedState;
  declare const COMMAND_STORE: unique symbol;
  declare const COMMAND_EDITOR: unique symbol;
  declare const COMMAND_INITIAL_STATE: unique symbol;
  declare const COMMAND_MAKE_DISPATCH: unique symbol;
  declare const COMMAND_MAKE_REMATCH_MODEL: unique symbol;
  export class AbstractCommand {
    /**
     * 插件唯一标志，如果和其它command重复，则只有一个会生效
     */
    static key = 'uniq-custom-command-key';
  
    /*
     * zongheng 的 application 实例，didMount 之后可以直接拿到
     */
    applicationContext: IApplicationContext;

    constructor(p?: any): void;
  
    /**
     * hooks
     */
  
    /**
     * command 被真实挂载到 表格应用中。 建议所有的业务逻辑都在该函数之后执行
     */
    onMount(): void
  
    /**
     * command 被从 表格应用中卸载
     */
    onUnMount(): void
  
    /**
     * 表格应用的状态发生了变化， 如进入选区状态， 某个单元格内容被修改时会触发。
     * 该 hook 仅仅用来通知状态发生了变化。 具体的状态管理相关内容， 可以查看 状态管理 章节。
     */
    onStateChange(params: { shared: ISharedState }): void
  
    /**
     * 自定义ui配置
     */
  
    /**
     * 工具栏的ui配置
     */
    toolbar?: UIConfig<IToolbarConfig>;
    /**
     * 菜单栏的ui配置
     */
    menubar?: UIConfig<IMenubarConfig>;
    /**
     * 工作表标签的右键菜单配置
     */
    sheetTabContextMenu?: UIConfig<ISheeTabContextMenuConfig>;
    /**
     * 表格内的右键菜单配置
     */
    sheetContextMenu?: UIConfig<ISheeTabContext>;
    /**
     * 标签栏右侧功能区的配置
     */
    sheetTabsActionBar?: UIConfig<ISheetTabsActionBarConfig>;
     /**
     * 移动端 ui 配置
     */
    /**
   * 工具栏的ui配置
   */
  mobileToolbar?: UIConfig<IToolbarConfig>;
  /**
   * 浮动菜单菜单配置
   */
  mobileSheetContextMenu?: UIConfig<ISheeTabContext>;
  /**
   * 编辑器行动点配置
   */
  mobileEditorAction?: UIConfig<ISheetTabsActionBarConfig>;
  }
  
  type UIConfig<T extends Record<string, unkown>> = (() => T) | Record<string, () => T>;

  export declare class CellExtension<V = unknown, T = unknown, O extends any = any> extends CellExtension_2<V, T, O> {
    static type: string;
    onShortcutKey(keyCode: number, options: ShortcutKeyOptions): boolean | void;
  }

  export declare interface CellPainter {
    ctx: CanvasRenderingContext2D;
    coord: {
      row: number;
      column: number;
    };
    rect: Rect;
    cell: Range_2;
    postion: null;
  }

  export { CellStyleCommand }

  export { CellTipCommand }

  export { CellValue }

  export { ChartCommand }

  export { CheckboxCellCommand }

  export { ClearCommand }

  export { Color }

  export { ColumnDeletedEvent }

  export { ColumnInsertedEvent }

  export { ColumnTypeCommand }

  export { ColumnWidthChangedEvent }

  export { CommandKey }

  export { commandKeys }

  declare type Commands = Array<typeof AbstractCommand>;

  declare type Commands_2 = Array<typeof AbstractCommand>;

  export declare const commandsPremiumPreset: Commands_2;

  export declare const commandsPreset: Commands_2;

  export declare const commandsStandardPreset: Commands_2;

  export { ConditionalFormatCommand }

  export { ConditionalFormatRule }

  export { ConditionalFormatRuleBuilder }

  export { ConditionalFormattingDataBarCondition }

  export { ConditionalFormattingDuplicateCondition }

  export { ConditionalFormattingEmptyCondition }

  export { ConditionalFormattingErrorCondition }

  export { ConditionalFormattingFormulaCondition }

  export { ConditionalFormattingIconSetCondition }

  export { ConditionalFormattingNumberCondition }

  export { ConditionalFormattingTextCondition }

  export { CopyPasteAction }

  export { CopyPasteType }

  export declare const createWorkbook: (config?: ICreateWorkbookConfig) => Workbook;

  export { DataStore }

  export { dataStoreReactUtil }

  export { dataStoreUtil }

  export { DataValidationCommand }

  export { DateCellCommand }

  export { DEFAULT_FORMATS }

  export { DeleteDimensionCommand }

  export { DimensionVisibleCommand }

  export { ESelectionsMode }

  export declare type ExtensionClass = typeof CellExtension | typeof RangeExtension | typeof ViewExtension | typeof SheetExtension | typeof InteractionExtension;

  export { Filter }

  export { FilterCommand }

  export { FilterCondition }

  export { FilterCriteria }

  export { FilterCriteriaBuilder }

  export { FilterCriteriaInstance }

  export declare interface FloatContentProps<P extends any = any> {
    id: string;
    width: number;
    height: number;
    readonly: boolean;
    workbook: Workbook;
    isDragging: boolean;
    selected: boolean;
    payload: P;
    getData: () => Array<Array<number | string | boolean>>;
  }

  declare interface FloatContentProps_2<P extends any = any> {
    id: string;
    width: number;
    height: number;
    readonly: boolean;
    workbook: Workbook;
    isDragging: boolean;
    selected: boolean;
    payload: P;
    getData: () => Array<Array<number | string | boolean>>;
  }

  export declare class FloatExtension<T, O = any> extends FloatExtension_2<T, O> {
    static type: string;
    static defaultWidth: number;
    static defaultHeight: number;
    /**
     * 快捷键处理
     *
     * @param {number} keyCode keyboardEvent.keyCode
     * @param {ShortcutKeyOptions} options 一些上下文参数
     * @return {void}
     */
    onShortcutKey(keyCode: number, options: ShortcutKeyOptions): void;
    /**
     * 浮动元素内容渲染
     *
     * @param {FloatContentProps<T>} props 组件属性
     * @return {ReactNode}
     */
    renderContent(props: FloatContentProps_2<T>): ReactNode;
  }

  export { FloatExtensionObjectDeletedEvent }

  export { FloatExtensionObjectInsertedEvent }

  export { FormatPainterState }

  export { FormulaCommand }

  export { FrozenCommand }

  export { GridCommand }

  export { GroupCommand }

  export { HighlightCommand }

  export { HighlightDuplicateCommand }

  declare type IAction = Exclude<keyof Controller | keyof Workbook, Symbol>;


  declare interface ICreateWorkbookConfig {
    extensions?: CoreExtension[];
    utils?: Partial<SheetUtils>;
    license?: string;
    enableCalculationEngine?: boolean;
    calculationEngineConfig?: CalcSettings;
  }

  export { IEditorProps as IMobileTextEditorProps }
  export { IEditorProps as ISheetCellEditorProps }

  export { IFloatElementContextMenuEvent }

  export { IgnoredErrorCommand }

  export { IH5ContextMenuEvent }

  export { ImageCommand }

  export { ImageLoader }

  export { IMenuItem }

  declare interface IMobileSheetApplicationProps {
    topPanel?: React_2.ReactNode;
    bottomPanel?: React_2.ReactNode;
  }

  export { InsertDimensionCommand }

  export declare class InteractionExtension<O = any> extends ExtensionBase<O> {
    static type: 'interaction';
    onShortcutKey?(keyCode: number, options: ShortcutKeyOptions): boolean;
  }

  declare type IPureSheetApplicationProvider = ComponentProps<typeof SheetApplicationProvider_2>;

  declare type IPureSheetApplicationProvider_2 = ComponentProps<typeof MobileSheetApplicationProvider_2>;

  export { IRangePickerHandler }

  export { IRangePickerProps }

  export { ISearchCondition }

  export { ISharedState }

  declare type ISheetApplicationProvider = Omit<IPureSheetApplicationProvider, 'workbook'> & {
    workbook?: Workbook;
  };

  declare type ISheetApplicationProvider_2 = Omit<IPureSheetApplicationProvider_2, 'workbook'> & {
    workbook?: Workbook;
  };

  export { ISheetRange }

  export declare class LicenseChecker extends Eventer<{
    'licenseExtracted': null;
  }> {
    private license?;
    licenseInfo: {
      plan: 0 | 1 | 2 | 3;
    };
    hasExtracted: boolean;
    constructor(license?: string);
    setLicense: (license?: string) => void;
    onLicenseExtracted: (callback: () => void) => () => void;
    extractLicenseInfo: () => Promise<void>;
    check: (action: IAction) => void;
  }

  export { LinkCellCommand }

  export declare const loadFormulaI18n: (lang: 'zh-CN' | 'en-US') => void;

  export { Menu }

  export { Menubar }

  export { MergeCellsCommand }

  export declare const mobileCommandsPremiumPreset: Commands;

  export declare const mobileCommandsPreset: Commands;

  export declare const mobileCommandsStandardPreset: Commands;

  export declare const MobileSheetApplication: React_2.FC<IMobileSheetApplicationProps>;

  export declare const MobileSheetApplicationProvider: React_2.NamedExoticComponent<React_2.PropsWithChildren<ISheetApplicationProvider_2>>;

  export declare const MobileSheetTabs: React_2.MemoExoticComponent<() => JSX.Element>;

  export { MobileTextEditor }

  export declare const MobileToolbar: React_2.MemoExoticComponent<() => JSX.Element>;

  export { MobileToolbarEnum }

  export declare const mobileUiConfigPreset: IMobileSheetContext;

  export { ModalLayout }

  export { NumberFormatCommand }

  export { PasteEvent }

  export { PivotTableCommand }

  export { Range_2 as Range }

  export declare class RangeExtension<T = any, O = any> extends RangeExtension_2<T, O> {
    static type: string;
    /**
     * 快捷键处理
     *
     * @param {number} keyCode keyboardEvent.keyCode
     * @param {ShortcutKeyOptions} options 一些上下文参数
     * @return {void}
     */
    onShortcutKey(keyCode: number, options: ShortcutKeyOptions): void;
    /**
     * PC 端点击处理
     *
     * @param {hit} hit 点击信息
     * @param {RangeExtensionReaderWriter<T>} record 数据操作实例
     * @return {void}
     */
    onRangeClick(hit: RangeHit, record: RangeExtensionReaderWriter<T>): void;
    /**
     * 移动端触屏处理
     *
     * @param {hit} hit 点击信息
     * @param {RangeExtensionReaderWriter<T>} record 数据操作实例
     * @return {void}
     */
    onRangeTap(hit: RangeHit, record: RangeExtensionReaderWriter<T>): void;
    /**
     * 鼠标/笔触/手指触碰到屏幕的处理
     *
     * @param {hit} hit 点击信息
     * @param {RangeExtensionReaderWriter<T>} record 数据操作实例
     * @return {void}
     */
    onRangePointerDown(hit: RangeHit, record: RangeExtensionReaderWriter<T>): void;
    /**
     * 鼠标/笔触/手指触离开屏幕的处理
     *
     * @param {hit} hit 点击信息
     * @param {RangeExtensionReaderWriter<T>} record 数据操作实例
     * @return {void}
     */
    onRangePointerUp(hit: RangeHit, record: RangeExtensionReaderWriter<T>): void;
    /**
     * 鼠标/笔触/手指进入区域的处理
     *
     * @param {RangeExtensionReaderWriter<T>} record 数据操作实例
     * @return {void}
     */
    onRangePointerEnter(record: RangeExtensionReaderWriter<T>): void;
    /**
     * 鼠标/笔触/手指离开区域的处理
     *
     * @param {RangeExtensionReaderWriter<T>} record 数据操作实例
     * @return {void}
     */
    onRangePointerLeave(record: RangeExtensionReaderWriter<T>): void;
    /**
     * 区域跟随节点渲染
     * 新版renderView，性能好，支持冻结，和表格的浮动元素表现一致
     *
     * @param {RangeExtensionViewProps<T>} props 组件属性
     * @return {ReactNode} React 节点
     */
    renderView?(props: RangeExtensionViewProps<T>): ReactNode;
    /**
     * 旧版renderView
     * 性能差，但是不考虑冻结，且大小跟随可视区大小，有些场景比较适合
     */
    renderViewLegacy?(props: RangeExtensionViewLegacyProps<T>): ReactNode;
    /**
     * 区域背景渲染
     *
     * @param {RangeExtensionPainter} painter 渲染相关参数
     * @return {void}
     */
    paintRangeBackground(painter: RangeExtensionPainter<T>): void;
    /**
     * 区域前景渲染
     *
     * @param {RangeExtensionPainter} painter 渲染相关参数
     * @return {void}
     */
    paintRangeForeground(painter: RangeExtensionPainter<T>): void;
  }

  export declare interface RangeExtensionPainter<T = unknown> {
    ctx: CanvasRenderingContext2D;
    rect: Rect;
    model: T;
  }

  export { RangeExtensionReaderWriter }

  export declare type RangeExtensionViewLegacyProps<T = unknown> = RangeExtensionViewProps<T> & {
    right: number;
    bottom: number;
  };

  export declare interface RangeExtensionViewProps<T = unknown> {
    id: string;
    width: number;
    height: number;
    left: number;
    top: number;
    workbook: Workbook;
    model: T;
  }

  export declare interface RangeHit {
    /**
     * 距离区域左侧的距离
     */
    left: number;
    /**
     * 距离区域上侧的距离
     */
    top: number;
    /**
     * 距离区域右侧的距离
     */
    right: number;
    /**
     * 距离区域下侧的距离
     */
    bottom: number;
    /**
     * 点击的单元格的行坐标
     */
    row: number;
    /**
     * 点击的单元格的列坐标
     */
    column: number;
    /**
     * 阻止后面的 RangeExtension 继续点击处理
     */
    end: () => void;
  }

  export { RangeList }

  export { RangePicker }

  export { RangePickerGlobalModal }

  export { ReadonlyChangedEvent }

  declare type Rect = RectCoord & RectSize;

  declare interface RectCoord {
    left: number;
    top: number;
  }

  declare interface RectSize {
    width: number;
    height: number;
  }

  export { ResizeDimensionCommand }

  export { RichTextEditorCommand }

  export { RightPanel }

  export { RowDeletedEvent }

  export { RowHeightChangedEvent }

  export { RowInsertedEvent }

  export { ScaleCommand }

  export { ScrollEvent }

  export { SearchReplaceCommand }

  export { SelectCellCommand }

  export { SelectionChangedEvent }

  export { SelectionSummaryCommand }

  export { Sheet }

  export declare const SheetApplication: (props: React_2.ComponentProps<typeof PureSheetApplication>) => JSX.Element;

  export declare const SheetApplicationProvider: React_2.NamedExoticComponent<React_2.PropsWithChildren<ISheetApplicationProvider>>;

  export declare class SheetExtension<T extends any = any, O = any> extends SheetExtension_2<T, O> {
    static type: string;
    onShortcutKey(keyCode: number, options: ShortcutKeyOptions): void;
  }

  export { SheetHandler }

  export declare interface SheetPainter {
    ctx: CanvasRenderingContext2D;
    rect: RectSize;
    sheet: null;
  }

  export { SheetRemovedEvent }

  export { SheetTabs }

  export { SheetUtils }

  export declare type SheetViewportPainter = SheetPainter & {
    content: Rect;
  };

  export declare interface ShortcutKeyOptions {
    ctrl: boolean;
    alt: boolean;
    command: boolean;
    option: boolean;
    shift: boolean;
    isMacOS: boolean;
    end: () => void;
  }

  export { SignatureCommand }

  export { SortCommand }

  export { StickyFrozenCommand }

  export { Toolbar }

  export { ToolbarConfig }

  export declare const toolbarConfigPreset: ToolbarConfig;

  export declare const uiConfigPreset: {
    /** 菜单栏配置 */
    menubarConfig: {
      key: string;
      title: string;
      items: string[][];
    }[];
    /** 工具栏配置 */
    toolbarConfig: ToolbarConfig;
    /** 右键菜单配置 */
    contextMenuConfig: string[][];
    /** 工作表管理器右键菜单配置 */
    sheetTabsContextMenuConfig: never[];
    /** 底部栏右侧的节点配置 */
    sheetTabsRightPanelConfig: string[];
  };

  export { UndoRedoCommand }

  export { useApplicationConfig }

  export { useApplicationContext }

  export { useSharedSelector }

  export declare class ViewExtension<O = any> extends ExtensionBase<O> {
    static type: string;
    paintSheetBackground(painter: SheetPainter): void;
    paintSheetForeground(painter: SheetPainter): void;
    paintCellBackground(painter: CellPainter): void;
    paintCellForeground(painter: CellPainter): void;
  }

  export { VStyle }

  export { WordWrapCommand }

  export { Workbook }

  export declare type WorkbookSchema = any;

  export { ZHEvents }

  export { }

};
