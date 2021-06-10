"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;

var UserDetails = function UserDetails() {
  var _useState = useState({
    users: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var fetchUsers = function fetchUsers() {
    // Where we're fetching data from
    fetch("https://randomuser.me/api") // We get the API response and receive data in JSON format...
    .then(function (response) {
      return response.json();
    }) // ...then we update the users state
    .then(function (data) {
      return setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          users: data,
          isLoading: false
        });
      });
    }) // Catch any errors we hit and update the app
    ["catch"](function (error) {
      return setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: error,
          isLoading: false
        });
      });
    });
  };

  var clearData = function clearData() {
    setState(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        users: [],
        isLoading: true
      });
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Random User"), state.error ? /*#__PURE__*/React.createElement("p", null, state.error) : null, /*#__PURE__*/React.createElement("button", {
    onClick: fetchUsers
  }, "Fetch Data"), /*#__PURE__*/React.createElement("button", {
    onClick: clearData
  }, "clear Data"), /*#__PURE__*/React.createElement("h1", null, "Data"), !state.isLoading ? state.users.results && state.users.results.map(function (user) {
    var email = user.email,
        picture = user.picture;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: picture.medium
    }), /*#__PURE__*/React.createElement("p", null, "Email Address: ", email), /*#__PURE__*/React.createElement("hr", null));
  }) // If there is a delay in data, let's let the user know it's loading
  :
  /*#__PURE__*/
  React.createElement("h3", null, "Loading..."));
};

ReactDOM.render( /*#__PURE__*/React.createElement(UserDetails, null), document.getElementById("AppRoot"));
