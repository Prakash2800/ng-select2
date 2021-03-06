(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ng-select2-component/src/lib/select2-hint.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2-hint.component.ts ***!
  \*************************************************************************/
/*! exports provided: Select2Hint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2Hint", function() { return Select2Hint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Select2Hint = /** @class */ (function () {
    function Select2Hint() {
    }
    Select2Hint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: 'select2-hint' })
    ], Select2Hint);
    return Select2Hint;
}());



/***/ }),

/***/ "./projects/ng-select2-component/src/lib/select2-utils.ts":
/*!****************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2-utils.ts ***!
  \****************************************************************/
/*! exports provided: timeout, Select2Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2Utils", function() { return Select2Utils; });
var timeout = 200;
var unicodePatterns = [
    { l: 'a', s: /[ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/gi },
    { l: 'aa', s: /ꜳ/gi },
    { l: 'ae', s: /[æǽǣ]/gi },
    { l: 'ao', s: /ꜵ/gi },
    { l: 'au', s: /ꜷ/gi },
    { l: 'av', s: /[ꜹꜻ]/gi },
    { l: 'ay', s: /ꜽ/gi },
    { l: 'b', s: /[ⓑｂḃḅḇƀƃɓ]/gi },
    { l: 'c', s: /[ⓒｃćĉċčçḉƈȼꜿↄ]/gi },
    { l: 'd', s: /[ⓓｄḋďḍḑḓḏđƌɖɗꝺ]/gi },
    { l: 'dz', s: /[ǳǆ]/gi },
    { l: 'e', s: /[ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ]/gi },
    { l: 'f', s: /[ⓕｆḟƒꝼ]/gi },
    { l: 'g', s: /[ⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/gi },
    { l: 'h', s: /[ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/gi },
    { l: 'hv', s: /ƕ/gi },
    { l: 'i', s: /[ⓘｉìíîĩīĭİïḯỉǐȉȋịįḭɨı]/gi },
    { l: 'j', s: /[ⓙｊĵǰɉ]/gi },
    { l: 'k', s: /[ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/gi },
    { l: 'l', s: /[ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇꝆ]/gi },
    { l: 'lj', s: /ǉ/gi },
    { l: 'm', s: /[ⓜｍḿṁṃɱɯ]/gi },
    { l: 'n', s: /[ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/gi },
    { l: 'nj', s: /ǌ/gi },
    { l: 'o', s: /[ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔƟꝋꝍɵ]/gi },
    { l: 'oi', s: /ƣ/gi },
    { l: 'oe', s: /œ/gi },
    { l: 'oo', s: /ꝏ/gi },
    { l: 'ou', s: /ȣ/gi },
    { l: 'p', s: /[ⓟｐṕṗƥᵽꝑꝓꝕ]/gi },
    { l: 'q', s: /[ⓠｑɋꝗꝙ]/gi },
    { l: 'r', s: /[ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/gi },
    { l: 's', s: /[ⓢｓßẞśṥŝṡšṧṣṩșşȿꞩꞅẛ]/gi },
    { l: 't', s: /[ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/gi },
    { l: 'tz', s: /ꜩ/gi },
    { l: 'u', s: /[ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/gi },
    { l: 'v', s: /[ⓥｖṽṿʋꝟʌ]/gi },
    { l: 'vy', s: /ꝡ/gi },
    { l: 'w', s: /[ⓦｗẁẃŵẇẅẘẉⱳ]/gi },
    { l: 'x', s: /[ⓧｘẋẍ]/gi },
    { l: 'y', s: /[ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/gi },
    { l: 'z', s: /[ⓩｚźẑżžẓẕƶȥɀⱬꝣ]/gi }
];
var defaultMinCountForSearch = 6;
var Select2Utils = /** @class */ (function () {
    function Select2Utils() {
    }
    Select2Utils.getScrollUpIndex = function (data, value) {
        var index = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var groupOrOption = data_1[_i];
            var options = groupOrOption.options;
            if (options) {
                index++;
                var valueIndex = options.findIndex(function (op) { return op.value === value; });
                if (valueIndex !== -1) {
                    return index + valueIndex;
                }
                else {
                    index += options.length;
                }
            }
            else {
                if (groupOrOption.value === value) {
                    return index;
                }
                else {
                    index++;
                }
            }
        }
        return 0;
    };
    Select2Utils.getOptionByValue = function (data, value) {
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var groupOrOption = data_2[_i];
            var options = groupOrOption.options;
            if (options) {
                for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
                    var option = options_1[_a];
                    if (option.value === value) {
                        return option;
                    }
                }
            }
            else {
                if (groupOrOption.value === value) {
                    return groupOrOption;
                }
            }
        }
        return null;
    };
    Select2Utils.getOptionsByValue = function (data, value, multiple) {
        if (multiple) {
            var values = Array.isArray(value) ? value : [];
            var result = [];
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var v = values_1[_i];
                var option = Select2Utils.getOptionByValue(data, v);
                if (option) {
                    result.push(option);
                }
            }
            return result;
        }
        return Select2Utils.getOptionByValue(data, value);
    };
    Select2Utils.getFirstAvailableOption = function (data) {
        for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
            var groupOrOption = data_3[_i];
            var options = groupOrOption.options;
            if (options) {
                for (var _a = 0, options_2 = options; _a < options_2.length; _a++) {
                    var option = options_2[_a];
                    if (!option.disabled) {
                        return option.value;
                    }
                }
            }
            else {
                var option = groupOrOption;
                if (!option.disabled) {
                    return option.value;
                }
            }
        }
        return null;
    };
    Select2Utils.getOptionsCount = function (data) {
        var count = 0;
        for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
            var groupOrOption = data_4[_i];
            var options = groupOrOption.options;
            if (options) {
                count += options.length;
            }
            else {
                count++;
            }
        }
        return count;
    };
    Select2Utils.valueIsNotInFilteredData = function (filteredData, value) {
        if (Select2Utils.isNullOrUndefined(value)) {
            return true;
        }
        for (var _i = 0, filteredData_1 = filteredData; _i < filteredData_1.length; _i++) {
            var groupOrOption = filteredData_1[_i];
            var options = groupOrOption.options;
            if (options) {
                for (var _a = 0, options_3 = options; _a < options_3.length; _a++) {
                    var option = options_3[_a];
                    if (option.value === value) {
                        return false;
                    }
                }
            }
            else {
                if (groupOrOption.value === value) {
                    return false;
                }
            }
        }
        return true;
    };
    // tslint:disable-next-line:cognitive-complexity
    Select2Utils.getPreviousOption = function (filteredData, hoveringValue) {
        var findIt = Select2Utils.isNullOrUndefined(hoveringValue);
        for (var i = filteredData.length - 1; i >= 0; i--) {
            var groupOrOption = filteredData[i];
            var options = groupOrOption.options;
            if (options) {
                for (var j = options.length - 1; j >= 0; j--) {
                    var option = options[j];
                    if (findIt) {
                        if (!option.disabled) {
                            return option.value;
                        }
                    }
                    findIt = option.value === hoveringValue;
                }
            }
            else {
                var option = groupOrOption;
                if (findIt) {
                    if (!option.disabled) {
                        return option.value;
                    }
                }
                findIt = option.value === hoveringValue;
            }
        }
        return findIt ? hoveringValue : null;
    };
    // tslint:disable-next-line:cognitive-complexity
    Select2Utils.getNextOption = function (filteredData, hoveringValue) {
        var findIt = Select2Utils.isNullOrUndefined(hoveringValue);
        for (var _i = 0, filteredData_2 = filteredData; _i < filteredData_2.length; _i++) {
            var groupOrOption = filteredData_2[_i];
            var options = groupOrOption.options;
            if (options) {
                for (var _a = 0, options_4 = options; _a < options_4.length; _a++) {
                    var option = options_4[_a];
                    if (findIt) {
                        if (!option.disabled) {
                            return option.value;
                        }
                    }
                    else {
                        findIt = option.value === hoveringValue;
                    }
                }
            }
            else {
                var option = groupOrOption;
                if (findIt) {
                    if (!option.disabled) {
                        return option.value;
                    }
                }
                else {
                    findIt = option.value === hoveringValue;
                }
            }
        }
        return findIt ? hoveringValue : null;
    };
    Select2Utils.isNullOrUndefined = function (value) {
        return value === null || value === undefined;
    };
    Select2Utils.getLastScrollTopIndex = function (hoveringValue, results, filteredData, lastScrollTopIndex) {
        if (Select2Utils.isNullOrUndefined(hoveringValue)) {
            results.scrollTop = 0;
            return 0;
        }
        else {
            var scrollTop = Select2Utils.getScrollUpIndex(filteredData, hoveringValue);
            if (scrollTop - lastScrollTopIndex > 5) {
                lastScrollTopIndex += scrollTop - lastScrollTopIndex - 5;
                var item = results.querySelectorAll('li').item(scrollTop);
                if (item) {
                    results.scrollTop = item.offsetTop - results.offsetHeight;
                }
                return lastScrollTopIndex;
            }
            if (lastScrollTopIndex - scrollTop > 0) {
                lastScrollTopIndex -= lastScrollTopIndex - scrollTop;
                var item = results.querySelectorAll('li').item(lastScrollTopIndex - 1);
                if (item) {
                    results.scrollTop = item.offsetTop;
                }
                return lastScrollTopIndex;
            }
            return null;
        }
    };
    Select2Utils.containSearchText = function (label, searchText, editPattern) {
        return searchText
            ? Select2Utils
                .formatSansUnicode(label)
                .match(new RegExp(Select2Utils.formatPattern(searchText, editPattern), 'i')) !== null
            : true;
    };
    Select2Utils.protectPattern = function (str) {
        return str.replace(new RegExp('[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]', 'g'), '\\$&');
    };
    Select2Utils.formatSansUnicode = function (str) {
        for (var _i = 0, unicodePatterns_1 = unicodePatterns; _i < unicodePatterns_1.length; _i++) {
            var unicodePattern = unicodePatterns_1[_i];
            str = str.replace(unicodePattern.s, unicodePattern.l);
        }
        return str;
    };
    Select2Utils.formatPattern = function (str, editPattern) {
        str = Select2Utils.formatSansUnicode(Select2Utils.protectPattern(str));
        if (editPattern && typeof editPattern === 'function') {
            str = editPattern(str);
        }
        return str;
    };
    Select2Utils.getFilteredData = function (data, searchText, editPattern) {
        if (searchText) {
            var result = [];
            for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                var groupOrOption = data_5[_i];
                var options = groupOrOption.options;
                if (options) {
                    if (options.some(function (group) { return Select2Utils.containSearchText(group.label, searchText, editPattern); })) {
                        var filteredOptions = options.filter(function (group) { return Select2Utils.containSearchText(group.label, searchText, editPattern); });
                        result.push({
                            label: groupOrOption.label,
                            options: filteredOptions
                        });
                    }
                }
                else if (Select2Utils.containSearchText(groupOrOption.label, searchText, editPattern)) {
                    result.push(groupOrOption);
                }
            }
            return result;
        }
        else {
            return data;
        }
    };
    Select2Utils.getOptionStyle = function (value, hoveringValue) {
        return value === hoveringValue
            ? 'select2-results__option select2-results__option--highlighted'
            : 'select2-results__option';
    };
    Select2Utils.getDropdownStyle = function (isOpen) {
        return isOpen
            ? 'select2-container select2-container--default select2-container-dropdown select2-container--open'
            : 'select2-container select2-container--default select2-container-dropdown';
    };
    Select2Utils.getContainerStyle = function (disabled, isOpen) {
        return "select2 select2-container select2-container--default " + (disabled ? 'select2-container--disabled' : '') + " "
            + ((isOpen ? 'select2-container--open' : '') + " select2-container--below select2-container--focus");
    };
    Select2Utils.getSelectionStyle = function (multiple) {
        return "select2-selection select2-selection--" + (multiple ? 'multiple' : 'single');
    };
    Select2Utils.isSearchboxHiddex = function (data, minCountForSearch) {
        if (typeof minCountForSearch !== 'number') {
            minCountForSearch = defaultMinCountForSearch;
        }
        var optionCount = Select2Utils.getOptionsCount(data);
        return optionCount < minCountForSearch;
    };
    Select2Utils.getSearchStyle = function (isHidden) {
        return isHidden
            ? 'select2-search select2-search--dropdown select2-search--hide'
            : 'select2-search select2-search--dropdown';
    };
    Select2Utils.isSelected = function (options, option, multiple) {
        if (multiple) {
            return options && options.some(function (op) { return op.value === option.value; }) ? 'true' : 'false';
        }
        else {
            return options && option.value === options.value ? 'true' : 'false';
        }
    };
    Select2Utils.removeSelection = function (options, option) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].value === option.value) {
                options.splice(i, 1);
                return;
            }
        }
    };
    return Select2Utils;
}());



/***/ }),

/***/ "./projects/ng-select2-component/src/lib/select2.component.html":
/*!**********************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"containerStyle\">\r\n    <div class=\"selection\"\r\n         #selection\r\n         [attr.tabindex]=\"!this.isOpen ? tabIndex : '-1'\"\r\n         (click)=\"toggleOpenAndClose()\"\r\n         (focus)=\"focusin()\"\r\n         (blur)=\"focusout()\"\r\n         (keydown)=\"openKey($event)\"\r\n         [class.select2-focused]=\"focused\">\r\n        <div [class]=\"selectionStyle\"\r\n             role=\"combobox\">\r\n            <span *ngIf=\"!multiple\"\r\n                  class=\"select2-selection__rendered\"\r\n                  [title]=\"select2Option ? select2Option.label : ''\">\r\n                <span *ngIf=\"!select2Option\">&nbsp;</span>\r\n                <ng-container *ngIf=\"select2Option\">{{select2Option.label}}</ng-container>\r\n                <span [class.select2-selection__placeholder__option]=\"option\"\r\n                      class=\"select2-selection__placeholder\">{{placeholder}}</span>\r\n            </span>\r\n            <span *ngIf=\"!multiple\"\r\n                  class=\"select2-selection__arrow\"\r\n                  role=\"presentation\">\r\n                <b role=\"presentation\"></b>\r\n            </span>\r\n            <ul *ngIf=\"multiple\"\r\n                class=\"select2-selection__rendered\">\r\n                <span [class.select2-selection__placeholder__option]=\"select2Options?.length > 0\"\r\n                      class=\"select2-selection__placeholder\">{{placeholder}}</span>\r\n                <li *ngFor=\"let op of option; trackBy: trackBy\"\r\n                    class=\"select2-selection__choice\"\r\n                    [title]=\"op.label\">\r\n                    <span (click)=\"removeSelection($event, op)\"\r\n                          class=\"select2-selection__choice__remove\"\r\n                          role=\"presentation\">×</span>\r\n                    {{op.label}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"select2-subscript-wrapper\">\r\n            <ng-content select=\"select2-hint\"></ng-content>\r\n        </div>\r\n    </div>\r\n    <div [class]=\"dropdownStyle\">\r\n        <div class=\"select2-dropdown select2-dropdown--below\">\r\n            <div [class]=\"searchStyle\">\r\n                <input #searchInput\r\n                       [id]=\"id + '-search-field'\"\r\n                       [(value)]=\"searchText\"\r\n                       (keydown)=\"keyDown($event)\"\r\n                       (keyup)=\"searchUpdate($event)\"\r\n                       class=\"select2-search__field\"\r\n                       type=\"search\"\r\n                       role=\"textbox\"\r\n                       autocomplete=\"off\"\r\n                       autocorrect=\"off\"\r\n                       autocapitalize=\"off\"\r\n                       spellcheck=\"false\"\r\n                       [attr.tabindex]=\"this.isOpen ? tabIndex : '-1'\">\r\n            </div>\r\n            <div class=\"select2-results\">\r\n                <ul #results\r\n                    class=\"select2-results__options\"\r\n                    role=\"tree\"\r\n                    tabindex=\"-1\"\r\n                    (keydown)=\"keyDown($event)\">\r\n                    <ng-template ngFor\r\n                                 [ngForOf]=\"filteredData\"\r\n                                 let-groupOrOption\r\n                                 [ngForTrackBy]=\"trackBy\">\r\n                        <li *ngIf=\"groupOrOption.options\"\r\n                            class=\"select2-results__option\"\r\n                            role=\"group\">\r\n                            <strong [attr.class]=\"'select2-results__group' + (groupOrOption.classes ? ' ' + groupOrOption.classes : '')\">{{groupOrOption.label}}</strong>\r\n                            <ul class=\"select2-results__options select2-results__options--nested\">\r\n                                <li *ngFor=\"let option of groupOrOption.options; trackBy:trackBy\"\r\n                                    [class]=\"getOptionStyle(option)\"\r\n                                    role=\"treeitem\"\r\n                                    [attr.aria-selected]=\"isSelected(option)\"\r\n                                    [attr.aria-disabled]=\"isDisabled(option)\"\r\n                                    (mouseenter)=\"mouseenter(option)\"\r\n                                    (click)=\"click(option)\">{{option.label}}</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li *ngIf=\"!groupOrOption.options\"\r\n                            [class]=\"getOptionStyle(groupOrOption)\"\r\n                            role=\"treeitem\"\r\n                            [attr.aria-selected]=\"isSelected(groupOrOption)\"\r\n                            [attr.aria-disabled]=\"isDisabled(groupOrOption)\"\r\n                            (mouseenter)=\"mouseenter(groupOrOption)\"\r\n                            (click)=\"click(groupOrOption)\">\r\n                            {{groupOrOption.label}}\r\n                        </li>\r\n                    </ng-template>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./projects/ng-select2-component/src/lib/select2.component.scss":
/*!**********************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select2-container {\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n  width: 100%; }\n  .select2-container .select2-container-dropdown {\n    position: absolute; }\n  .select2-container .select2-selection--single {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: block;\n    height: 28px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .select2-container .select2-selection--single .select2-selection__rendered {\n      display: block;\n      padding-left: 8px;\n      padding-right: 20px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .select2-container .select2-selection--single .select2-selection__clear {\n      position: relative; }\n  .select2-container .select2-selection--multiple {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: block;\n    min-height: 32px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .select2-container .select2-selection--multiple .select2-selection__rendered {\n      display: inline-block;\n      overflow: hidden;\n      padding-left: 8px;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .select2-container .select2-search--inline {\n    float: left; }\n  .select2-container .select2-search--inline .select2-search__field {\n      box-sizing: border-box;\n      border: none;\n      font-size: 100%;\n      margin-top: 5px;\n      padding: 0; }\n  .select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {\n        -webkit-appearance: none; }\n  .select2-dropdown {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  left: -100000px;\n  width: 100%;\n  z-index: 1051; }\n  .select2-results {\n  display: block; }\n  .select2-results__options {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  .select2-results__option {\n  padding: 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .select2-results__option[aria-selected] {\n    cursor: pointer; }\n  .select2-container--open .select2-dropdown {\n  left: 0; }\n  .select2-container--open .select2-dropdown--above {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  .select2-container--open .select2-dropdown--below {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n  .select2-search--dropdown {\n  display: block;\n  padding: 4px; }\n  .select2-search--dropdown .select2-search__field {\n    padding: 4px;\n    width: 100%;\n    box-sizing: border-box; }\n  .select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {\n      -webkit-appearance: none; }\n  .select2-search--dropdown.select2-search--hide {\n    display: none; }\n  .select2-close-mask {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  min-width: 100%;\n  height: auto;\n  width: auto;\n  opacity: 0;\n  z-index: 99;\n  background-color: #fff;\n  filter: alpha(opacity=0); }\n  .select2-hidden-accessible {\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important; }\n  .select2-container--default .select2-selection--single {\n  background-color: #fff;\n  border: 1px solid #aaa;\n  border-radius: 4px; }\n  .select2-container--default .select2-selection--single .select2-selection__rendered {\n    color: #444;\n    line-height: 28px; }\n  .select2-container--default .select2-selection--single .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold; }\n  .select2-container--default .select2-selection--single .select2-selection__placeholder {\n    color: #999; }\n  .select2-container--default .select2-selection--single .select2-selection__placeholder__option {\n    display: none; }\n  .select2-container--default .select2-selection--single .select2-selection__arrow {\n    height: 26px;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    width: 20px; }\n  .select2-container--default .select2-selection--single .select2-selection__arrow b {\n      border-color: #888 transparent;\n      border-style: solid;\n      border-width: 5px 4px 0;\n      height: 0;\n      left: 50%;\n      margin-left: -4px;\n      margin-top: -2px;\n      position: absolute;\n      top: 50%;\n      width: 0; }\n  .select2-container--default.select2-container--disabled .select2-selection--single {\n  background-color: #eee;\n  cursor: default; }\n  .select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear {\n    display: none; }\n  .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {\n  border-color: transparent transparent #888;\n  border-width: 0 4px 5px; }\n  .select2-container--default .select2-selection--multiple {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  cursor: text; }\n  .select2-container--default .select2-selection--multiple .select2-selection__rendered {\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    padding: 0 5px;\n    width: 100%; }\n  .select2-container--default .select2-selection--multiple .select2-selection__rendered li {\n      list-style: none; }\n  .select2-container--default .select2-selection--multiple .select2-selection__placeholder {\n    color: #999;\n    margin-top: 5px;\n    float: left; }\n  .select2-container--default .select2-selection--multiple .select2-selection__placeholder__option {\n    display: none; }\n  .select2-container--default .select2-selection--multiple .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-right: 10px; }\n  .select2-container--default .select2-selection--multiple .select2-selection__choice {\n    background-color: #e4e4e4;\n    border: 1px solid #aaa;\n    border-radius: 4px;\n    cursor: default;\n    float: left;\n    margin-right: 5px;\n    margin-top: 5px;\n    padding: 0 5px; }\n  .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {\n    color: #999;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: bold;\n    margin-right: 2px; }\n  .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {\n      color: #333; }\n  .select2-container--default.select2-container--focused .select2-selection--multiple {\n  border: solid black 1px;\n  outline: 0; }\n  .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,\n.select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple {\n  border: solid black 1px;\n  outline: 0; }\n  .select2-container--default.select2-container--disabled .select2-selection--multiple {\n  background-color: #eee;\n  cursor: default; }\n  .select2-container--default.select2-container--disabled .select2-selection__choice__remove {\n  display: none; }\n  .select2-container--default.select2-container--open.select2-container--above .select2-selection--single,\n.select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n  .select2-container--default.select2-container--open.select2-container--below .select2-selection--single,\n.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  .select2-container--default .select2-search--dropdown .select2-search__field {\n  border: 1px solid #aaa; }\n  .select2-container--default .select2-search--inline .select2-search__field {\n  background: transparent;\n  border: none;\n  outline: 0;\n  box-shadow: none;\n  -webkit-appearance: textfield; }\n  .select2-container--default .select2-results > .select2-results__options {\n  max-height: 200px;\n  overflow-y: auto; }\n  .select2-container--default .select2-results__option[role=group] {\n  padding: 0; }\n  .select2-container--default .select2-results__option[aria-disabled=true] {\n  color: #999; }\n  .select2-container--default .select2-results__option[aria-selected=true] {\n  background-color: #ddd; }\n  .select2-container--default .select2-results__option .select2-results__option {\n  padding-left: 1em; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__group {\n    padding-left: 0; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__option {\n    margin-left: -1em;\n    padding-left: 2em; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n      margin-left: -2em;\n      padding-left: 3em; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n        margin-left: -3em;\n        padding-left: 4em; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n          margin-left: -4em;\n          padding-left: 5em; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n            margin-left: -5em;\n            padding-left: 6em; }\n  .select2-container--default .select2-results__option--highlighted[aria-selected] {\n  background-color: #5897fb;\n  color: white; }\n  .select2-container--default .select2-results__group {\n  cursor: default;\n  display: block;\n  padding: 6px;\n  color: gray; }\n  /* stylelint-disable-next-line selector-type-no-unknown */\n  :host.material {\n  display: inline-block;\n  width: 300px; }\n  :host.material > .select2-container {\n    padding-bottom: 1.29688em;\n    vertical-align: inherit; }\n  :host.material > .select2-container .selection {\n      padding: 0.4375em 0;\n      border-top: 0.84375em solid transparent;\n      display: inline-flex;\n      align-items: baseline;\n      width: 100%;\n      height: auto; }\n  :host.material .select2-container--default .select2-selection--single,\n  :host.material .select2-container--default .select2-selection--multiple {\n    width: 100%;\n    border: 0;\n    border-radius: 0;\n    height: 24px;\n    box-sizing: border-box; }\n  :host.material .select2-container--default .select2-selection--single::before,\n    :host.material .select2-container--default .select2-selection--multiple::before {\n      content: ' ';\n      display: block;\n      position: absolute;\n      bottom: 1.65em;\n      background-color: #ddd;\n      height: 1px;\n      width: 100%; }\n  :host.material .select2-container--default .select2-selection--single::after,\n    :host.material .select2-container--default .select2-selection--multiple::after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      bottom: 1.63em;\n      background-color: #5a419e;\n      height: 2px;\n      width: 0%;\n      left: 50%;\n      transition: none; }\n  :host.material .select2-container--default .select2-selection--single .select2-selection__rendered,\n    :host.material .select2-container--default .select2-selection--multiple .select2-selection__rendered {\n      padding-left: 1px;\n      line-height: inherit; }\n  :host.material .select2-container--default .select2-selection--single .select2-selection__placeholder,\n    :host.material .select2-container--default .select2-selection--multiple .select2-selection__placeholder {\n      display: block;\n      color: rgba(0, 0, 0, 0.38);\n      transition: -webkit-transform 0.3s;\n      transition: transform 0.3s;\n      transition: transform 0.3s, -webkit-transform 0.3s;\n      position: absolute;\n      -webkit-transform-origin: 0 21px;\n              transform-origin: 0 21px;\n      left: 0;\n      top: 20px; }\n  :host.material .select2-container--default .select2-container--open {\n    left: 0;\n    bottom: 1.6em; }\n  :host.material .select2-container--default .select2-selection__placeholder__option {\n    -webkit-transform: translateY(-1.5em) scale(0.75) perspective(100px) translateZ(0.001px);\n            transform: translateY(-1.5em) scale(0.75) perspective(100px) translateZ(0.001px);\n    width: 133.33333%; }\n  :host.material .select2-container--default .select2-selection__arrow {\n    top: 20px; }\n  :host.material .select2-container--default.select2-container--open .select2-selection--single::after,\n  :host.material .select2-container--default.select2-container--open .select2-selection--multiple::after,\n  :host.material .select2-container--default .select2-focused .select2-selection--single::after,\n  :host.material .select2-container--default .select2-focused .select2-selection--multiple::after {\n    transition: width 0.3s cubic-bezier(0.12, 1, 0.77, 1), left 0.3s cubic-bezier(0.12, 1, 0.77, 1);\n    width: 100%;\n    left: 0%; }\n  :host.material .select2-container--default .select2-dropdown {\n    border-radius: 0;\n    border: 0;\n    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5); }\n  :host.material .select2-container--default .select2-results__option[aria-selected=true],\n  :host.material .select2-container--default .select2-results__option--highlighted[aria-selected] {\n    background-color: rgba(0, 0, 0, 0.04);\n    color: #000; }\n  :host.material .select2-container--default .select2-results__option[aria-selected=true] {\n    color: #ff5722; }\n  :host.material .select2-container--default.select2-container--disabled .select2-selection--single,\n  :host.material .select2-container--default.select2-container--disabled .select2-selection--multiple {\n    background-color: transparent; }\n  :host.material .select2-container--default.select2-container--disabled .select2-selection--single::before,\n    :host.material .select2-container--default.select2-container--disabled .select2-selection--multiple::before {\n      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.26) 0, rgba(0, 0, 0, 0.26) 33%, transparent 0);\n      background-size: 4px 1px;\n      background-repeat: repeat-x;\n      background-color: transparent;\n      background-position: 0 bottom; }\n  :host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single::before, :host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single::after,\n  :host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple::before,\n  :host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple::after {\n    background-color: red; }\n  :host.material:not(.select2-container--open) .select2-focused .select2-selection--single,\n  :host.material:not(.select2-container--open) .select2-focused .select2-selection--multiple {\n    border: 0; }\n  :host.material .select2-subscript-wrapper {\n    position: absolute;\n    top: calc(100% - 1.72917em);\n    font-size: 75%; }\n  /* stylelint-disable selector-type-no-unknown */\n  @supports (-moz-appearance: none) {\n  select2.material .select2-container--default .select2-selection--single,\n  select2.material .select2-container--default .select2-selection--multiple {\n    height: 26px; } }\n  @supports (-ms-scroll-limit: 0) {\n  select2.material .select2-container--default .select2-selection--single,\n  select2.material .select2-container--default .select2-selection--multiple {\n    height: 25px; } }\n"

/***/ }),

/***/ "./projects/ng-select2-component/src/lib/select2.component.ts":
/*!********************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.component.ts ***!
  \********************************************************************/
/*! exports provided: Select2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2", function() { return Select2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _select2_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select2-utils */ "./projects/ng-select2-component/src/lib/select2-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var nextUniqueId = 0;
var Select2 = /** @class */ (function () {
    function Select2(_changeDetectorRef, _parentForm, _parentFormGroup, _control, tabIndex) {
        this._changeDetectorRef = _changeDetectorRef;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this._control = _control;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.option = null;
        this.isOpen = false;
        this.hoveringValue = null;
        this.innerSearchText = '';
        this.lastScrollTopIndex = 0;
        // tslint:disable:member-ordering
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Whether the element is focused or not. */
        this.focused = false;
        /** View -> model callback called when select has been touched */
        this._onTouched = function () {
            // do nothing
        };
        /** View -> model callback called when value changes */
        this._onChange = function () {
            // do nothing
        };
        this._disabled = false;
        this._required = false;
        this._readonly = false;
        this._clickDetection = false;
        this._uid = "select2-" + nextUniqueId++;
        this._previousNativeValue = this._value;
        this.id = this.id;
        this._tabIndex = parseInt(tabIndex, 10) || 0;
        if (this._control) {
            this._control.valueAccessor = this;
        }
        this._clickDetectionFc = this.clickDetection.bind(this);
    }
    Object.defineProperty(Select2.prototype, "select2Options", {
        get: function () {
            return this.multiple ? this.option : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "select2Option", {
        get: function () {
            return this.multiple ? null : this.option;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "searchText", {
        get: function () {
            return this.innerSearchText;
        },
        set: function (text) {
            if (this.customSearchEnabled) {
                this.search.emit(text);
            }
            this.innerSearchText = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "dropdownStyle", {
        get: function () {
            return _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getDropdownStyle(this.isOpen);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "filteredData", {
        get: function () {
            var result = this.customSearchEnabled
                ? this.data
                : _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getFilteredData(this.data, this.searchText, this.editPattern);
            if (_select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].valueIsNotInFilteredData(result, this.hoveringValue)) {
                this.hoveringValue = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getFirstAvailableOption(result);
                if (this.resultsElement) {
                    var lastScrollTopIndex = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getLastScrollTopIndex(this.hoveringValue, this.resultsElement, result, this.lastScrollTopIndex);
                    if (lastScrollTopIndex !== null) {
                        this.lastScrollTopIndex = lastScrollTopIndex;
                    }
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "containerStyle", {
        get: function () {
            return _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getContainerStyle(this.disabled, this.isOpen);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "selectionStyle", {
        get: function () {
            return _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getSelectionStyle(this.multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "id", {
        /** Unique id of the element. */
        get: function () { return this._id; },
        set: function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "required", {
        /** Whether the element is required. */
        get: function () { return this._required; },
        set: function (value) { this._required = this._coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "disabled", {
        /** Whether the element is disabled. */
        get: function () { return this._control ? this._control.disabled : this._disabled; },
        set: function (value) { this._disabled = this._coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "readonly", {
        /** Whether the element is readonly. */
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = this._coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "value", {
        /** The input element's value. */
        get: function () { return this._value; },
        set: function (value) {
            var _this = this;
            setTimeout(function () {
                _this._value = value;
                _this.writeValue(value);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "tabIndex", {
        /** Tab index for the select2 element. */
        get: function () { return this.disabled ? -1 : this._tabIndex; },
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._tabIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "ariaInvalid", {
        get: function () {
            return this._isErrorState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select2.prototype, "classMaterial", {
        get: function () {
            return this.material === '' || this.material === true;
        },
        enumerable: true,
        configurable: true
    });
    Select2.prototype.ngOnInit = function () {
        var option = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getOptionsByValue(this.data, this._control ? this._control.value : this.value, this.multiple);
        if (option !== null) {
            this.option = option;
        }
        if (!Array.isArray(option)) {
            this.hoveringValue = this.value;
        }
        this.isSearchboxHidden = this.customSearchEnabled
            ? false
            : _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].isSearchboxHiddex(this.data, this.minCountForSearch);
        this.searchStyle = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getSearchStyle(this.isSearchboxHidden);
    };
    Select2.prototype.ngAfterViewInit = function () {
        this.selectionElement = this.selection.nativeElement;
        this.searchInputElement = this.searchInput.nativeElement;
        this.resultsElement = this.results.nativeElement;
    };
    Select2.prototype.ngDoCheck = function () {
        this._dirtyCheckNativeValue();
    };
    Select2.prototype.ngOnDestroy = function () {
        window.document.body.removeEventListener('click', this._clickDetectionFc);
    };
    Select2.prototype.getOptionStyle = function (option) {
        return _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getOptionStyle(option.value, this.hoveringValue)
            + (option.classes ? ' ' + option.classes : '');
    };
    Select2.prototype.mouseenter = function (option) {
        if (!option.disabled) {
            this.hoveringValue = option.value;
        }
    };
    Select2.prototype.click = function (option) {
        if (!option.disabled) {
            this.select(option);
        }
    };
    Select2.prototype.toggleOpenAndClose = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.focused = true;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.innerSearchText = '';
            this.focusSearchboxOrResultsElement();
            if (this.resultsElement) {
                var lastScrollTopIndex = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getLastScrollTopIndex(this.hoveringValue, this.resultsElement, this.data, this.lastScrollTopIndex);
                if (lastScrollTopIndex !== null) {
                    this.lastScrollTopIndex = lastScrollTopIndex;
                }
            }
            this.open.emit();
        }
        if (this.isOpen && !this._clickDetection) {
            setTimeout(function () {
                window.document.body.addEventListener('click', _this._clickDetectionFc, false);
                _this._clickDetection = true;
            }, _select2_utils__WEBPACK_IMPORTED_MODULE_3__["timeout"]);
        }
        this._changeDetectorRef.markForCheck();
    };
    Select2.prototype.clickDetection = function (e) {
        if (!this.ifParentContainsClass(e.target, 'selection')) {
            if (this.isOpen && !this.ifParentContainsClass(e.target, 'select2-dropdown')) {
                this.toggleOpenAndClose();
            }
            if (!this.ifParentContainsId(e.target, this._id)) {
                this.clickExit();
            }
        }
        else if (this.isOpen && !this.ifParentContainsId(e.target, this._id)) {
            this.toggleOpenAndClose();
            this.clickExit();
        }
    };
    Select2.prototype.clickExit = function () {
        this.focused = false;
        window.document.body.removeEventListener('click', this._clickDetectionFc);
        this._clickDetection = false;
    };
    Select2.prototype.ifParentContainsClass = function (element, cssClass) {
        return this.getParentElementByClass(element, cssClass) !== null;
    };
    Select2.prototype.ifParentContainsId = function (element, id) {
        return this.getParentElementById(element, id) !== null;
    };
    Select2.prototype.getParentElementByClass = function (element, cssClass) {
        if (this.containClasses(element, cssClass.trim().split(/\s+/))) {
            return element;
        }
        return element.parentElement
            ? this.getParentElementByClass(element.parentElement, cssClass)
            : null;
    };
    Select2.prototype.getParentElementById = function (element, id) {
        if (element.id === id) {
            return element;
        }
        return element.parentElement
            ? this.getParentElementById(element.parentElement, id)
            : null;
    };
    Select2.prototype.containClasses = function (element, cssClasses) {
        if (!element.classList) {
            return false;
        }
        for (var _i = 0, cssClasses_1 = cssClasses; _i < cssClasses_1.length; _i++) {
            var cssClass = cssClasses_1[_i];
            if (!element.classList.contains(cssClass)) {
                return false;
            }
        }
        return true;
    };
    Select2.prototype.focusin = function () {
        if (this.disabled) {
            return;
        }
        this.focused = true;
    };
    Select2.prototype.focusout = function () {
        if (this.selectionElement && !this.selectionElement.classList.contains('select2-focused')) {
            this.focused = false;
            this._onTouched();
        }
    };
    Select2.prototype.moveUp = function () {
        this.hoveringValue = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getPreviousOption(this.filteredData, this.hoveringValue);
        if (this.resultsElement) {
            var lastScrollTopIndex = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getLastScrollTopIndex(this.hoveringValue, this.resultsElement, this.filteredData, this.lastScrollTopIndex);
            if (lastScrollTopIndex !== null) {
                this.lastScrollTopIndex = lastScrollTopIndex;
            }
        }
    };
    Select2.prototype.moveDown = function () {
        this.hoveringValue = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getNextOption(this.filteredData, this.hoveringValue);
        if (this.resultsElement) {
            var lastScrollTopIndex = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getLastScrollTopIndex(this.hoveringValue, this.resultsElement, this.filteredData, this.lastScrollTopIndex);
            if (lastScrollTopIndex !== null) {
                this.lastScrollTopIndex = lastScrollTopIndex;
            }
        }
    };
    Select2.prototype.selectByEnter = function () {
        if (this.hoveringValue) {
            var option = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getOptionByValue(this.data, this.hoveringValue);
            this.select(option);
        }
    };
    Select2.prototype.select = function (option) {
        var value;
        if (option !== null) {
            if (this.multiple) {
                var options = this.option;
                var index = options.findIndex(function (op) { return op.value === option.value; });
                if (index === -1) {
                    options.push(option);
                }
                else {
                    options.splice(index, 1);
                }
                value = this.option.map(function (op) { return op.value; });
            }
            else {
                this.option = option;
                this.isOpen = false;
                if (this.selectionElement) {
                    this.selectionElement.focus();
                }
                value = this.option.value;
            }
        }
        else if (this._control) {
            this.option = null;
        }
        if (this._control) {
            this._onChange(value);
        }
        this.update.emit(value);
    };
    Select2.prototype.keyDown = function (e) {
        if (e.keyCode === 40) {
            this.moveDown();
            e.preventDefault();
        }
        else if (e.keyCode === 38) {
            this.moveUp();
            e.preventDefault();
        }
        else if (e.keyCode === 13) {
            this.selectByEnter();
            e.preventDefault();
        }
        else if (e.keyCode === 9 && this.isOpen) {
            this.toggleOpenAndClose();
            this.focused = false;
        }
    };
    Select2.prototype.openKey = function (e) {
        if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 13) {
            this.toggleOpenAndClose();
            e.preventDefault();
        }
        else if (e.keyCode === 9) {
            this.focused = false;
            this._onTouched();
        }
    };
    Select2.prototype.trackBy = function (index, item) {
        return item.value;
    };
    Select2.prototype.searchUpdate = function (e) {
        this.searchText = e.target.value;
    };
    Select2.prototype.isSelected = function (option) {
        return _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].isSelected(this.option, option, this.multiple);
    };
    Select2.prototype.isDisabled = function (option) {
        return option.disabled ? 'true' : 'false';
    };
    Select2.prototype.removeSelection = function (e, option) {
        _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].removeSelection(this.option, option);
        this.update.emit(this.option.map(function (op) { return op.value; }));
        e.preventDefault();
        e.stopPropagation();
        if (this.isOpen) {
            this.focusSearchboxOrResultsElement();
        }
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    Select2.prototype.writeValue = function (value) {
        this._setSelectionByValue(value);
    };
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    Select2.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    Select2.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    Select2.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Select2.prototype._isErrorState = function () {
        var isInvalid = this._control && this._control.invalid;
        var isTouched = this._control && this._control.touched;
        var isSubmitted = (this._parentFormGroup && this._parentFormGroup.submitted) ||
            (this._parentForm && this._parentForm.submitted);
        return !!(isInvalid && (isTouched || isSubmitted));
    };
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    Select2.prototype._setSelectionByValue = function (value) {
        var _this = this;
        if (this.option || (value !== undefined && value !== null)) {
            var isArray = Array.isArray(value);
            if (this.multiple && value && !isArray) {
                throw new Error('Non array value.');
            }
            else if (this.data) {
                if (this._control && this.multiple) {
                    this.option = []; // if value is null, then empty option and return
                    if (isArray) {
                        // value is not null. Preselect value
                        var selectedValues = _select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getOptionsByValue(this.data, value, this.multiple);
                        selectedValues.map(function (item) { return _this.select(item); });
                    }
                }
                else {
                    this.select(_select2_utils__WEBPACK_IMPORTED_MODULE_3__["Select2Utils"].getOptionByValue(this.data, value));
                }
            }
            else if (this._control) {
                this._control.viewToModelUpdate(value);
            }
            this._changeDetectorRef.markForCheck();
        }
    };
    /** Does some manual dirty checking on the native input `value` property. */
    Select2.prototype._dirtyCheckNativeValue = function () {
        var newValue = this.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this._stateChanges.next();
        }
    };
    Select2.prototype._coerceBooleanProperty = function (value) {
        return value != null && "" + value !== 'false';
    };
    Select2.prototype.focusSearchboxOrResultsElement = function () {
        if (!this.isSearchboxHidden) {
            if (this.searchInputElement) {
                this.searchInputElement.focus();
            }
        }
        else {
            if (this.resultsElement) {
                this.resultsElement.focus();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], Select2.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Select2.prototype, "minCountForSearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Select2.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Select2.prototype, "customSearchEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Select2.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Select2.prototype, "material", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], Select2.prototype, "editPattern", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Select2.prototype, "update", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Select2.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Select2.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selection'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Select2.prototype, "selection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('results'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Select2.prototype, "results", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Select2.prototype, "searchInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('id'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], Select2.prototype, "id", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Select2.prototype, "required", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Select2.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Select2.prototype, "readonly", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Select2.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Select2.prototype, "tabIndex", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-invalid'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Select2.prototype, "ariaInvalid", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.material'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Select2.prototype, "classMaterial", null);
    Select2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select2',
            template: __webpack_require__(/*! ./select2.component.html */ "./projects/ng-select2-component/src/lib/select2.component.html"),
            styles: [__webpack_require__(/*! ./select2.component.scss */ "./projects/ng-select2-component/src/lib/select2.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('tabindex')),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], String])
    ], Select2);
    return Select2;
}());



/***/ }),

/***/ "./projects/ng-select2-component/src/lib/select2.module.ts":
/*!*****************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.module.ts ***!
  \*****************************************************************/
/*! exports provided: Select2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2Module", function() { return Select2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _select2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select2.component */ "./projects/ng-select2-component/src/lib/select2.component.ts");
/* harmony import */ var _select2_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select2-hint.component */ "./projects/ng-select2-component/src/lib/select2-hint.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Select2Module = /** @class */ (function () {
    function Select2Module() {
    }
    Select2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _select2_hint_component__WEBPACK_IMPORTED_MODULE_4__["Select2Hint"],
                _select2_component__WEBPACK_IMPORTED_MODULE_3__["Select2"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _select2_hint_component__WEBPACK_IMPORTED_MODULE_4__["Select2Hint"],
                _select2_component__WEBPACK_IMPORTED_MODULE_3__["Select2"]
            ]
        })
    ], Select2Module);
    return Select2Module;
}());



/***/ }),

/***/ "./projects/ng-select2-component/src/public_api.ts":
/*!*********************************************************!*\
  !*** ./projects/ng-select2-component/src/public_api.ts ***!
  \*********************************************************/
/*! exports provided: Select2, Select2Hint, timeout, Select2Utils, Select2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_select2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/select2.component */ "./projects/ng-select2-component/src/lib/select2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select2", function() { return _lib_select2_component__WEBPACK_IMPORTED_MODULE_0__["Select2"]; });

/* harmony import */ var _lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/select2-hint.component */ "./projects/ng-select2-component/src/lib/select2-hint.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select2Hint", function() { return _lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_1__["Select2Hint"]; });

/* harmony import */ var _lib_select2_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/select2-utils */ "./projects/ng-select2-component/src/lib/select2-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _lib_select2_utils__WEBPACK_IMPORTED_MODULE_2__["timeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select2Utils", function() { return _lib_select2_utils__WEBPACK_IMPORTED_MODULE_2__["Select2Utils"]; });

/* harmony import */ var _lib_select2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/select2.module */ "./projects/ng-select2-component/src/lib/select2.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select2Module", function() { return _lib_select2_module__WEBPACK_IMPORTED_MODULE_3__["Select2Module"]; });

/*
 * Public API Surface of ng-select2-component
 */






/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 500px;\">\r\n  <a href=\"https://github.com/Zefling/ng-select2/tree/master/src\"\r\n     target=\"_blank\">the source code of the demo</a>\r\n  <h3>1. options in group ({{value1}})</h3>\r\n  <select2 [data]=\"data1\"\r\n           [value]=\"value1\"\r\n           (update)=\"update1($event)\"\r\n           id=\"selec2-1\">\r\n  </select2>\r\n  <h3>2. options ({{value2}})</h3>\r\n  <select2 [data]=\"data2\"\r\n           [value]=\"value2\"\r\n           (update)=\"update2($event)\"\r\n           id=\"selec2-2\">\r\n  </select2>\r\n  <h3>3. less options ({{value3}})</h3>\r\n  <select2 [data]=\"data3\"\r\n           [value]=\"value3\"\r\n           (update)=\"update3($event)\"\r\n           id=\"selec2-3\">\r\n  </select2>\r\n  <h3>4. disabled ({{value4}})</h3>\r\n  <select2 [data]=\"data4\"\r\n           [value]=\"value4\"\r\n           [disabled]=\"true\"\r\n           id=\"selec2-4\">\r\n\r\n  </select2>\r\n  <h3>5. hide search box ({{value5}})</h3>\r\n  <select2 [data]=\"data5\"\r\n           [value]=\"value5\"\r\n           [minCountForSearch]=\"minCountForSearch\"\r\n           (update)=\"update5($event)\"\r\n           id=\"selec2-5\">\r\n  </select2>\r\n  <h3>6. placeholder ({{value6}})</h3>\r\n  <select2 [data]=\"data6\"\r\n           placeholder=\"select an item\"\r\n           (update)=\"update6($event)\"\r\n           id=\"selec2-6\">\r\n  </select2>\r\n  <h3>7. open and search event ({{value7}})</h3>\r\n  <select2 [data]=\"data7\"\r\n           customSearchEnabled=\"true\"\r\n           (open)=\"open7()\"\r\n           (search)=\"search7($event)\"\r\n           (update)=\"update7($event)\">\r\n  </select2>\r\n  <h3>9. multiple ({{value9}})</h3>\r\n  <select2 [data]=\"data9\"\r\n           [value]=\"value9\"\r\n           multiple=\"true\"\r\n           (update)=\"update9($event)\"\r\n           id=\"selec2-9\">\r\n  </select2>\r\n  <h3>10. form binding ({{value10}})</h3>\r\n  <form [formGroup]=\"ctrlForm\">\r\n    <select2 [(ngModel)]=\"value10\"\r\n             [data]=\"data10\"\r\n             formControlName=\"test10\"\r\n             placeholder=\"Select a state\"\r\n             material\r\n             id=\"selec2-10\"></select2>\r\n    <button (click)=\"reset10()\">reset</button>\r\n    <button (click)=\"change10()\">Utah</button>\r\n  </form>\r\n  <h3>11. material style ({{value11}})</h3>\r\n  <select2 [data]=\"data11\"\r\n           [value]=\"value11\"\r\n           (update)=\"update11($event)\"\r\n           material\r\n           id=\"selec2-11\">\r\n  </select2>\r\n  <h3>12. boolean value ({{value12}})</h3>\r\n  <select2 [data]=\"data12\"\r\n           [value]=\"value12\"\r\n           (update)=\"update12($event)\"\r\n           id=\"selec2-12\">\r\n  </select2>\r\n  <h3>13. FormControl</h3>\r\n  <form [formGroup]=\"fg\">\r\n    <select2 [data]=\"data9\"  multiple=\"true\" id=\"selec2-10\" formControlName=\"state\">\r\n    </select2>\r\n    <button (click)=\"resetForm()\">Reset Form</button>\r\n  </form>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.data */ "./src/app/app.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.data1 = _app_data__WEBPACK_IMPORTED_MODULE_2__["data1"];
        this.data2 = _app_data__WEBPACK_IMPORTED_MODULE_2__["data2"];
        this.data3 = _app_data__WEBPACK_IMPORTED_MODULE_2__["data3"];
        this.data4 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data3"]));
        this.data5 = _app_data__WEBPACK_IMPORTED_MODULE_2__["data5"];
        this.data6 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data3"]));
        this.data7 = [];
        this.data9 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data1"]));
        this.data10 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data1"]));
        this.data11 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data1"]));
        this.data12 = _app_data__WEBPACK_IMPORTED_MODULE_2__["data12"];
        this.minCountForSearch = Infinity;
        this.value1 = 'CA';
        this.value2 = 'CA';
        this.value3 = 'foo';
        this.value4 = 'bar';
        this.value5 = 'foo3';
        this.value6 = '';
        this.value7 = '';
        this.value9 = [];
        this.value10 = 'CA';
        this.value11 = 'CA';
        this.value12 = true;
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.ctrlForm = this.fb.group({
            test10: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.fg.patchValue(this.formData());
    }
    AppComponent.prototype.update1 = function (value) {
        this.value1 = value;
    };
    AppComponent.prototype.update2 = function (value) {
        this.value2 = value;
    };
    AppComponent.prototype.update3 = function (value) {
        this.value3 = value;
    };
    AppComponent.prototype.update5 = function (value) {
        this.value5 = value;
    };
    AppComponent.prototype.update6 = function (value) {
        this.value6 = value;
    };
    AppComponent.prototype.open7 = function () {
        this.data7 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data2"]));
    };
    AppComponent.prototype.update7 = function (value) {
        this.value7 = value;
    };
    AppComponent.prototype.search7 = function (text) {
        this.data7 = text
            ? JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data2"]))
                .filter(function (option) { return option.label.toLowerCase().indexOf(text.toLowerCase()) > -1; })
            : JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__["data2"]));
    };
    AppComponent.prototype.update9 = function (value) {
        this.value9 = value;
    };
    AppComponent.prototype.reset9 = function () {
        this.value9 = ['CA'];
    };
    AppComponent.prototype.reset10 = function () {
        var test10 = this.ctrlForm.get('test10');
        if (test10) {
            test10.reset();
        }
    };
    AppComponent.prototype.change10 = function () {
        var test10 = this.ctrlForm.get('test10');
        if (test10) {
            test10.setValue('UT');
        }
    };
    AppComponent.prototype.update11 = function (value) {
        this.value11 = value;
    };
    AppComponent.prototype.update12 = function (value) {
        this.value12 = value;
    };
    AppComponent.prototype.resetForm = function () {
        this.fg.reset(this.formData());
    };
    AppComponent.prototype.formData = function () {
        return {
            state: ['CA', 'NV']
        };
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.data.ts":
/*!*****************************!*\
  !*** ./src/app/app.data.ts ***!
  \*****************************/
/*! exports provided: data1, data2, data3, data5, data12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data1", function() { return data1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data2", function() { return data2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data3", function() { return data3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data5", function() { return data5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data12", function() { return data12; });
var data1 = [
    {
        label: 'Alaskan/Hawaiian Time Zone',
        options: [
            { value: 'AK', label: 'Alaska' },
            { value: 'HI', label: 'Hawaii', disabled: true }
        ]
    },
    {
        label: 'Pacific Time Zone',
        options: [
            { value: 'CA', label: 'California' },
            { value: 'NV', label: 'Nevada' },
            { value: 'OR', label: 'Oregon' },
            { value: 'WA', label: 'Washington' }
        ]
    },
    {
        label: 'Mountain Time Zone',
        options: [
            { value: 'AZ', label: 'Arizona' },
            { value: 'CO', label: 'Colorado' },
            { value: 'ID', label: 'Idaho' },
            { value: 'MT', label: 'Montana' },
            { value: 'NE', label: 'Nebraska' },
            { value: 'NM', label: 'New Mexico' },
            { value: 'ND', label: 'North Dakota' },
            { value: 'UT', label: 'Utah' },
            { value: 'WY', label: 'Wyoming' }
        ]
    },
    {
        label: 'Central Time Zone',
        options: [
            { value: 'AL', label: 'Alabama' },
            { value: 'AR', label: 'Arkansas' },
            { value: 'IL', label: 'Illinois' },
            { value: 'IA', label: 'Iowa' },
            { value: 'KS', label: 'Kansas' },
            { value: 'KY', label: 'Kentucky' },
            { value: 'LA', label: 'Louisiana' },
            { value: 'MN', label: 'Minnesota' },
            { value: 'MS', label: 'Mississippi' },
            { value: 'MO', label: 'Missouri' },
            { value: 'OK', label: 'Oklahoma' },
            { value: 'SD', label: 'South Dakota' },
            { value: 'TX', label: 'Texas' },
            { value: 'TN', label: 'Tennessee' },
            { value: 'WI', label: 'Wisconsin' }
        ]
    },
    {
        label: 'Eastern Time Zone',
        options: [
            { value: 'CT', label: 'Connecticut' },
            { value: 'DE', label: 'Delaware' },
            { value: 'FL', label: 'Florida' },
            { value: 'GA', label: 'Georgia' },
            { value: 'IN', label: 'Indiana' },
            { value: 'ME', label: 'Maine' },
            { value: 'MD', label: 'Maryland' },
            { value: 'MA', label: 'Massachusetts' },
            { value: 'MI', label: 'Michigan' },
            { value: 'NH', label: 'New Hampshire' },
            { value: 'NJ', label: 'New Jersey' },
            { value: 'NY', label: 'New York' },
            { value: 'NC', label: 'North Carolina' },
            { value: 'OH', label: 'Ohio' },
            { value: 'PA', label: 'Pennsylvania' },
            { value: 'RI', label: 'Rhode Island' },
            { value: 'SC', label: 'South Carolina' },
            { value: 'VT', label: 'Vermont' },
            { value: 'VA', label: 'Virginia' },
            { value: 'WV', label: 'West Virginia' }
        ]
    }
];
var data2 = [
    { value: 'AK', label: 'Alaska' },
    { value: 'HI', label: 'Hawaii', disabled: true },
    { value: 'CA', label: 'California' },
    { value: 'NV', label: 'Nevada' },
    { value: 'OR', label: 'Oregon' },
    { value: 'WA', label: 'Washington' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'CO', label: 'Colorado' },
    { value: 'ID', label: 'Idaho' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'UT', label: 'Utah' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'AL', label: 'Alabama' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TX', label: 'Texas' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'IN', label: 'Indiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'OH', label: 'Ohio' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WV', label: 'West Virginia' }
];
var data3 = [
    { value: 'foo', label: 'foo' },
    { value: 'bar', label: 'bar' },
    { value: 'baz', label: 'baz' }
];
var data5 = [
    { value: 'foo1', label: 'foo1' },
    { value: 'foo2', label: 'foo2' },
    { value: 'foo3', label: 'foo3' },
    { value: 'foo4', label: 'foo4' },
    { value: 'foo5', label: 'foo5' },
    { value: 'foo6', label: 'foo6' }
];
var data12 = [
    { value: true, label: 'true' },
    { value: false, label: 'false' }
];


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_ng_select2_component_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ng-select2-component/src/public_api */ "./projects/ng-select2-component/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                projects_ng_select2_component_src_public_api__WEBPACK_IMPORTED_MODULE_4__["Select2Module"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Data\sources-svn\pitch\ng-select2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map