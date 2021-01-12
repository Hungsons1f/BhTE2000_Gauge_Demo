declare module TcHmi {
    module Controls {
        module Gauge_Flat_SemiCircle {
            class Gauge_Flat_SemiCircleControl extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                protected __uTitle: any;
                protected __uShowTitle: any;
                protected __uShowPercent: any;
                protected __uData: any;
                protected __uWarningValue: any;
                protected __uAlarmValue: any;
                protected __uFillColorNormal: any;
                protected __uFillColorWarning: any;
                protected __uFillColorAlarm: any;
                protected __uColorNormal: any;
                protected __uColorWarning: any;
                protected __uColorAlarm: any;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __uGauge: JQuery;
                protected __uGaugeBody: JQuery;
                protected __uGaugeFill: JQuery;
                protected __uGaugeCover: JQuery;
                protected __uGaugeTitle: JQuery;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                setTitle(valueNew: any): void;
                getTitle(): any;
                __processTitle(): void;
                setShowTitle(valueNew: any): void;
                getShowTitle(): any;
                __processShowTitle(): void;
                setShowPercent(valueNew: any): void;
                getShowPercent(): any;
                __processShowPercent(): void;
                setData(valueNew: any): void;
                getData(): any;
                __processData(): void;
                setWarningValue(valueNew: any): void;
                getWarningValue(): any;
                __processWarningValue(): void;
                setAlarmValue(valueNew: any): void;
                getAlarmValue(): any;
                __processAlarmValue(): void;
                setFillColorNormal(valueNew: any): void;
                getFillColorNormal(): any;
                __processFillColorNormal(): void;
                setFillColorWarning(valueNew: any): void;
                getFillColorWarning(): any;
                __processFillColorWarning(): void;
                setFillColorAlarm(valueNew: any): void;
                getFillColorAlarm(): any;
                __processFillColorAlarm(): void;
            }
        }
    }
}
