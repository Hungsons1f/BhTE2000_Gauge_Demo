/*
 * Generated 8/24/2020 2:57:05 PM
 * Copyright (C) 2020
 */
module TcHmi {
    export module Controls {
        export module Gauge_Flat_Circle {
            export class Gauge_Flat_CircleControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */

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

                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;

                protected __uGauge: any;
                protected __uGaugeBody: any;
                protected __uGaugeFill: any;
                protected __uGaugeCover: any;
                protected __uGaugeTitle: any;


				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Gauge_Flat_Circle_Gauge_Flat_CircleControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }

                    this.__uGauge = this.__element.find('.cydeus-gauge-circle');
                    this.__uGaugeBody = this.__element.find('.cydeus-gauge-circle-box');
                    this.__uGaugeFill = this.__element.find('.cydeus-gauge-circle-circle:nth-child(2)');
                    this.__uGaugeCover = this.__element.find('.cydeus-gauge-circle-percent');
                    this.__uGaugeTitle = this.__element.find('.cydeus-gauge-circle-title');

                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                }

                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }

                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * @description Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                public setTitle (valueNew: any) {
                    // convert the new value
                    var convertedValue = TcHmi.ValueConverter.toString(valueNew);

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('Title');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uTitle) {
                        return;
                    }

                    // save new value
                    this.__uTitle = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getTitle"]);

                    // process the new value
                    this.__processTitle();
                };

                public getTitle () {
                    // return the current text
                    return this.__uTitle;
                };

                public __processTitle () {
                    this.__uGaugeTitle.html(this.__uTitle);
                };

                public setShowTitle (valueNew: any) {
                    // convert the new value
                    var convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ShowTitle');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uShowTitle) {
                        return;
                    }

                    // save new value
                    this.__uShowTitle = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getShowTitle"]);

                    // process the new value
                    this.__processShowTitle();
                };

                public getShowTitle () {
                    // return the current text
                    return this.__uShowTitle;
                };

                public __processShowTitle () {
                    if (this.__uShowTitle) {
                        // show the gauge
                        this.__uGaugeTitle.css({
                            visibility: 'visible'
                        });
                    } else {
                        // hide the gauge
                        this.__uGaugeTitle.css({
                            visibility: 'collapse'
                        });
                    }
                };

                public setShowPercent (valueNew: any) {
                    // convert the new value
                    var convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ShowPercent');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uShowPercent) {
                        return;
                    }

                    // save new value
                    this.__uShowPercent = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getShowPercent"]);

                    // process the new value
                    this.__processShowPercent();
                };

                public getShowPercent () {
                    // return the current text
                    return this.__uShowPercent;
                };

                public __processShowPercent () {
                    if (this.__uShowPercent) {
                        // show the gauge
                        this.__uGaugeCover.css({
                            visibility: 'visible'
                        });
                    } else {
                        // hide the gauge
                        this.__uGaugeCover.css({
                            visibility: 'collapse'
                        });
                    }
                };

                public setData (valueNew: any) {
                    // convert the new value
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('Data');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uData) {
                        return;
                    }

                    // save new value
                    this.__uData = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getData"]);

                    // process the new value
                    this.__processData();
                };

                public getData () {
                    // return the current text
                    return this.__uData;
                };

                public __processData () {
                    // set text to html element
                    //if (this.__elementButton) {
                    //    this.__elementButton.text(this.__buttonText);
                    //}
                    if (!this.__uColorAlarm) {
                        this.__uColorAlarm = '#ff4646';
                    }
                    if (!this.__uColorNormal) {
                        this.__uColorNormal = '#00ffff';
                    }
                    if (!this.__uColorWarning) {
                        this.__uColorWarning = '#f1f218';
                    }

                    var value = this.__uData;
                    if ((value < 0) || (value > 100)) {
                        return;
                    }
                    else if ((value >= 0) && (value < this.__uWarningValue)) {
                        this.__uGaugeFill.css({
                            stroke: this.__uColorNormal//'#00ffff'
                        });
                    }
                    else if ((value >= this.__uWarningValue) && (value < this.__uAlarmValue)) {
                        this.__uGaugeFill.css({
                            stroke: this.__uColorWarning//'#f1f218'
                        });
                    }
                    else {
                        this.__uGaugeFill.css({
                            stroke: this.__uColorAlarm//'#ff4646'
                        });
                    }

                    this.__uGaugeFill.css({
                        strokeDashoffset: (251 - value * 251 / 100) + '%' /*251%*/
                    });
                    this.__uGaugeCover.html(value + '%');
                };

                public setWarningValue (valueNew: any) {
                    // convert the new value
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('WarningValue');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uWarningValue) {
                        return;
                    }

                    // save new value
                    this.__uWarningValue = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getWarningValue"]);

                    // process the new value
                    this.__processWarningValue();
                };

                public getWarningValue () {
                    // return the current text
                    return this.__uWarningValue;
                };

                public __processWarningValue () {
                    // set text to html element
                    //if (this.__elementButton) {
                    //    this.__elementButton.text(this.__buttonText);
                    //}
                    if ((this.__uWarningValue < 0)) {
                        this.__uWarningValue = 0;
                    }
                    else if ((this.__uWarningValue > this.__uAlarmValue)) {
                        this.__uWarningValue = this.__uAlarmValue;
                    }
                };

                public setAlarmValue (valueNew: any) {
                    // convert the new value
                    var convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('AlarmValue');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uAlarmValue) {
                        return;
                    }

                    // save new value
                    this.__uAlarmValue = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getAlarmValue"]);

                    // process the new value
                    this.__processAlarmValue();
                };

                public getAlarmValue () {
                    // return the current text
                    return this.__uAlarmValue;
                };

                public __processAlarmValue () {
                    // set text to html element
                    //if (this.__elementButton) {
                    //    this.__elementButton.text(this.__buttonText);
                    //}               
                    if ((this.__uAlarmValue < this.__uWarningValue)) {
                        this.__uAlarmValue = this.__uWarningValue;
                    }
                    else if ((this.__uAlarmValue > 100)) {
                        this.__uAlarmValue = 100;
                    }
                };

                public setFillColorNormal (valueNew: any) {
                    // convert the new value
                    var convertedValue = valueNew;

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('FillColorNormal');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uFillColorNormal) {
                        return;
                    }

                    // save new value
                    this.__uFillColorNormal = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getFillColorNormal"]);

                    // process the new value
                    this.__processFillColorNormal();
                };

                public getFillColorNormal () {
                    // return the current text
                    return this.__uFillColorNormal;
                };

                public __processFillColorNormal () {
                    // set text to html element
                    this.__uColorNormal = this.__uFillColorNormal.color;
                };

                public setFillColorWarning (valueNew: any) {
                    // convert the new value
                    var convertedValue = valueNew;

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('FillColorWarning');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uFillColorWarning) {
                        return;
                    }

                    // save new value
                    this.__uFillColorWarning = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getFillColorWarning"]);

                    // process the new value
                    this.__processFillColorWarning();
                };

                public getFillColorWarning () {
                    // return the current text
                    return this.__uFillColorWarning;
                };

                public __processFillColorWarning () {
                    // set text to html element
                    this.__uColorWarning = this.__uFillColorWarning.color;
                };

                public setFillColorAlarm (valueNew: any) {
                    // convert the new value
                    var convertedValue = valueNew;

                    // if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('FillColorAlarm');
                    }

                    // skip processing when the value has not changed
                    if (convertedValue === this.__uFillColorAlarm) {
                        return;
                    }

                    // save new value
                    this.__uFillColorAlarm = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getFillColorAlarm"]);

                    // process the new value
                    this.__processFillColorAlarm();
                };

                public getFillColorAlarm () {
                    // return the current text
                    return this.__uFillColorAlarm;
                };

                public __processFillColorAlarm () {
                    // set text to html element
                    this.__uColorAlarm = this.__uFillColorAlarm.color;
                };

            }
        }

        registerEx('Gauge_Flat_CircleControl', 'TcHmi.Controls.Gauge_Flat_Circle', Gauge_Flat_Circle.Gauge_Flat_CircleControl);
    }
}