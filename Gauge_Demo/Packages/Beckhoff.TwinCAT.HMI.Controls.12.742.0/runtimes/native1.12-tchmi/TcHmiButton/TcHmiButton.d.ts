declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiButton extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the span element which is used to display the text value as jquery object. */
                protected __elementContentTextSpan: JQuery;
                /**
                * Internal reference to the attribute "data-tchmi-text"
                */
                protected __text: string | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-padding"
                */
                protected __textPadding: TcHmi.FourSidedCss | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-horizontal-text-alignment"
                 */
                protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-vertical-text-alignment"
                */
                protected __textVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
                /**
                * Internal reference to the icon attributes.
                */
                protected __icon: Partial<TcHmi.Background>;
                /**
                * Internal reference to the attribute "data-tchmi-text-color"
                */
                protected __textColor: TcHmi.SolidColor | null | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-text-font-size"
               */
                protected __textFontSize: number | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-text-font-size-unit"
               */
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-text-font-family"
               */
                protected __textFontFamily: FontFamily | null | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-text-font-style"
               */
                protected __textFontStyle: FontStyle | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-text-font-style"
               */
                protected __textFontWeight: FontWeight | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-word-wrap"
                */
                protected __wordWrap: boolean | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-state-symbol"
                */
                protected __stateSymbol: TcHmi.Symbol<boolean> | undefined | null;
                /** Event handlers */
                protected __mousedownHandler: (event: MouseEvent) => void;
                protected __mouseupHandler: (event: MouseEvent) => void;
                protected __mouseenterHandler: (event: MouseEvent) => void;
                protected __mouseleaveHandler: (event: MouseEvent) => void;
                protected __touchstartHandler: (event: TouchEvent) => void;
                protected __touchEndOrCancelHandler: (event: TouchEvent) => void;
                protected __mousedown: boolean;
                /** Active touches over this control */
                protected __touches: Touch[];
                protected __state: boolean;
                /** We have an active mouse/touch down */
                protected __stateLock: boolean;
                protected __touchLock: boolean;
                protected __destroyEventOnPropertyIsEnabledChanged: DestroyFunction | null;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  * @function __previnit
                  */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
                * @function __init
                */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @function
                */
                destroy(): void;
                /**
                 * Processes the current state if state has changed.
                 * @function
                 * @param {boolean} state The new state of the control.
                 * @param {boolean} forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param {boolean} source What caused the change of state. Either user interaction, the change of an attribute or the state symbol. This parameter is needed in ToggleButton.
                 */
                protected __processState(state: boolean, forwardStateSymbol: boolean, source: string): void;
                /**
                 * Event handler for the __onPropertyIsEnabledChanged Event.
                 * @function
                 * @callback
                 */
                protected __onPropertyIsEnabledChanged(): (e: EventProvider.Event, data: {
                    propertyName: string;
                    dirtyPaths?: string[];
                }) => void;
                /**
                 * Returns an event handler for the mousedown event.
                 * @function
                 */
                protected __onMouseDown(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseup event.
                 * @function
                 */
                protected __onMouseUp(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseenter event.
                 * @function
                 */
                protected __onMouseEnter(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseleave event.
                 * @function
                 */
                protected __onMouseLeave(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the touchstart event.
                 * @function
                 */
                protected __onTouchStart(): (event: TouchEvent) => void;
                /**
                 * Returns an event handler for the touchend and touchcancel events.
                 * @function
                 */
                protected __onTouchEndOrCancel(): (event: TouchEvent) => void;
                /**
                * Sets the value of the member variable "text" if the new value is not equal to the current value
                * and calls the associated process function (processText) after that.
                * @function
                * @param   {string|number}    valueNew     -   The new value for text.
                */
                setText(valueNew: string | null): void;
                /**
                * Returns the current value of the member variable text.
                * @function
                * @returns {string}
                */
                getText(): string | undefined;
                /**
                * Processes the current value of text and forwards it to the target span element in template html.
                * The current value of text is only forwarded if it is no binding expression.
                * @function
                */
                protected __processText(): void;
                /**
                * Sets the value of the member variable "textPadding" if the new value is not equal to the current value
                * and calls the associated process function (processTextPadding) after that.
                * @function
                * @param   {Padding}    valueNew     -   The new value for textPadding.
                */
                setTextPadding(valueNew: FourSidedCss | null): void;
                /**
                 * The watch callback for the textPadding object resolver.
                 */
                protected __onResolverForTextPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
                * Returns the current value of the member variable textPadding.
                * @function
                * @returns {Padding}
                */
                getTextPadding(): FourSidedCss | null | undefined;
                /**
                * Processes the current value of textPadding and forwards it to the target span element in template html.
                * The current value of textPadding is only forwarded if it is no binding expression.
                * @function
                */
                protected __processTextPadding(): void;
                /**
                * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
                * @function
                * @param   {string}    valueNew     -   The new value for textHorizontalAlignment.
                */
                setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
                /**
                * Returns the current value of horizontalTextAligment.
                * @function
                * @returns      {string}       The current value of horizontalTextAligment.
                */
                getTextHorizontalAlignment(): "Left" | "Center" | "Right" | null | undefined;
                /**
                * Processes the current textHorizontalAlignment attribute value.
                * @function
                */
                protected __processTextHorizontalAlignment(): void;
                /**
                * Sets the textVerticalAlignment value and calls the associated process function (processTextVerticalAlignment).
                * @function
                * @param   {string}      valueNew     -   The new value for textVerticalAlignment.
                */
                setTextVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
                /**
                * Returns the current value of textVerticalAlignment.
                * @function
                * @returns      {string}     The current value of textVerticalAlignment.
                *                                                  Possible Values: "Top", "Bottom", "Center"
                */
                getTextVerticalAlignment(): "Center" | "Top" | "Bottom" | null | undefined;
                /**
                * Processes the current textVerticalAlignment attribute value.
                * @function
                */
                protected __processTextVerticalAlignment(): void;
                /**
                * Sets the value of the member variable "icon" if the new value is not equal to the current value.
                * and calls the associated process function (processIcon) after that.
                * @function
                * @param   {string}    valueNew     -   The new value for icon.
                */
                setIcon(valueNew: string | null): void;
                /**
                * Returns the current value of the member variable icon.
                * @function
                * @returns {string}
                */
                getIcon(): string | null | undefined;
                /**
                * Processes the current value of icon and forwards it to the target html container element.
                * @function
                */
                protected __processIcon(): void;
                /**
                * Sets the value of the member variable "iconPadding" if the new value is not equal to the current value
                * and calls the associated process function (processIconPadding) after that.
                * @function
                * @param   {Padding}    valueNew     -   The new value for iconPadding.
                */
                setIconPadding(valueNew: FourSidedCss | null): void;
                /**
                 * The watch callback for the iconPadding object resolver.
                 */
                protected __onResolverForIconPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
                * Returns the current value of the member variable iconPadding.
                * @function
                * @returns {Padding}
                */
                getIconPadding(): FourSidedCss | null | undefined;
                /**
                * Processes the current value of iconPadding and forwards it to the target span element in template html.
                * The current value of iconPadding is only forwarded if it is no binding expression.
                * @function
                */
                protected __processIconPadding(): void;
                /**
                * Sets the value of the member variable "iconWidth" if the new value is not equal to the current value.
                * and calls the associated process function (processIconWidth) after that.
                * @function
                * @param   {MeasurementValue}    valueNew     -   The new value for iconWidth.
                */
                setIconWidth(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable iconWidth.
                * @function
                * @returns {MeasurementValue}
                */
                getIconWidth(): number | null | undefined;
                /**
                * Processes the current value of iconWidth and forwards it to the target html container element.
                * @function
                */
                protected __processIconWidth(): void;
                /**
                * Sets the value of the member variable "iconWidthUnit" if the new value is not equal to the current value.
                * and calls the associated process function (processIconWidthUnit) after that.
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new value for iconWidthUnit.
                */
                setIconWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of the member variable iconWidthUnit.
                * @function
                * @returns MeasurementUnit}
                */
                getIconWidthUnit(): "px" | "%" | undefined;
                /**
                * Processes the current value of iconWidthUnit and forwards it to the target html container element.
                * @function
                */
                protected __processIconWidthUnit(): void;
                /**
                * Sets the value of the member variable "iconHeight" if the new value is not equal to the current value.
                * and calls the associated process function (processIconHeight) after that.
                * @function
                * @param   {MeasurementValue}    valueNew     -   The new value for iconHeight.
                */
                setIconHeight(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable iconHeight.
                * @function
                * @returns {MeasurementValue}
                */
                getIconHeight(): number | null | undefined;
                /**
                * Processes the current value of iconHeight and forwards it to the target html container element.
                * @function
                */
                protected __processIconHeight(): void;
                /**
                * Sets the value of the member variable "iconHeightUnit" if the new value is not equal to the current value.
                * and calls the associated process function (processIconHeightUnit) after that.
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new value for iconHeightUnit.
                */
                setIconHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of the member variable iconHeightUnit.
                * @function
                * @returns {MeasurementUnit}
                */
                getIconHeightUnit(): "px" | "%" | undefined;
                /**
                * Processes the current value of iconHeightUnit and forwards it to the target html container element.
                * @function
                */
                protected __processIconHeightUnit(): void;
                /**
                * Sets the iconHorizontalAlignment value and calls the associated process function (processIconHorizontalAlignment).
                * @function
                * @param   {string}    valueNew     -   The new value for iconHorizontalAlignment.
                */
                setIconHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                * Returns the current value of horizontalIconAligment.
                * @function
                * @returns      {string}       The current value of horizontalIconAligment.
                */
                getIconHorizontalAlignment(): "Left" | "Center" | "Right" | undefined;
                /**
                * Processes the current iconHorizontalAlignment attribute value.
                * @function
                */
                protected __processIconHorizontalAlignment(): void;
                /**
                * Sets the iconVerticalAlignment value and calls the associated process function (processIconVerticalAlignment).
                * @function
                * @param   {string}      valueNew     -   The new value for iconVerticalAlignment.
                */
                setIconVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
                /**
                * Returns the current value of iconVerticalAlignment.
                * @function
                * @returns      {string}     The current value of iconVerticalAlignment.
                */
                getIconVerticalAlignment(): "Center" | "Top" | "Bottom" | undefined;
                /**
                * Processes the current iconVerticalAlignment attribute value.
                * @function
                */
                protected __processIconVerticalAlignment(): void;
                /**
                * Sets the text color and calls the associated process function (processTextColor).
                * @function
                * @param   {string}    valueNew     -   The new value for textFColor.
                */
                setTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of textColor.
                * @function
                * @returns      {string}    The current value of textColor.
                */
                getTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current textColor attribute value.
                * @function
                */
                protected __processTextColor(): void;
                /**
                * Sets the font size and calls the associated process function (processTextFontSize).
                * @function
                * @param   {MeasurementValue}    valueNew     -   The new value for textFontSize.
                */
                setTextFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of textFontSize.
                * @function
                * @returns      {MeasurementValue}    The current value of textFontSize.
                */
                getTextFontSize(): number | undefined;
                /**
                * Processes the current textFontSize attribute value.
                * @function
                */
                protected __processTextFontSize(): void;
                /**
                * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
                * @function
                * @param   {MeasurementUnit}    valueNew     -   The new value for textFontSizeUnit.
                */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of textFontSizeUnit.
                * @function
                * @returns      {MeasurementUnit}    The current value of textFontSizeUnit.
                */
                getTextFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current textFontSizeUnit attribute value.
                * @function
                */
                protected __processTextFontSizeUnit(): void;
                /**
                * Sets the font family and calls the associated process function (processTextFontFamily).
                * @function
                * @param   {string}    valueNew     -   The new value for textFontFamily.
                */
                setTextFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of textFontFamily.
                * @function
                * @returns      {string}    The current value of textFontFamily.
                */
                getTextFontFamily(): string | null | undefined;
                /**
                * Processes the current textFontFamily attribute value.
                * @function
                */
                protected __processTextFontFamily(): void;
                /**
                * Sets the font style and calls the associated process function (processTextFontStyle).
                * @function
                * @param   {string}    valueNew     -   The new value for textFontStyle.
                */
                setTextFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of textFontStyle.
                * @function
                * @returns      {string}    The current value of textFontStyle.
                */
                getTextFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current textFontStyle attribute value.
                * @function
                */
                protected __processTextFontStyle(): void;
                /**
                * Sets the font weight and calls the associated process function (processTextFontWeight).
                * @function
                * @param   {string}    valueNew     -   The new value for textFontWeight.
                */
                setTextFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of textFontWeight.
                * @function
                * @returns      {string}    The current value of textFontWeight.
                */
                getTextFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current textFontWeight attribute value.
                * @function
                */
                protected __processTextFontWeight(): void;
                /**
                * Sets the wordWrap value and calls the associated process function (processWordWrap).
                * @function
                * @param   {boolean}    valueNew     -   The new value for wordWrap.
                */
                setWordWrap(valueNew: boolean | null): void;
                /**
                * Returns the current value of wordWrap.
                * @function
                * @returns      {boolean}    The current value of wordWrap.
                */
                getWordWrap(): boolean | undefined;
                /**
                * Processes the current wordWrap attribute value.
                * @function
                */
                protected __processWordWrap(): void;
                protected __destroyStateSymbolWatch: DestroyFunction | null;
                protected __onStateSymbolWatch(): (data: TcHmi.Symbol.IReadResultObject<boolean>) => void;
                /**
                 * @function
                 * @param valueNew
                 */
                setStateSymbol(valueNew: TcHmi.Symbol | null): void;
                /**
                 * @function
                 */
                getStateSymbol(): Symbol<boolean> | null | undefined;
            }
        }
    }
}
