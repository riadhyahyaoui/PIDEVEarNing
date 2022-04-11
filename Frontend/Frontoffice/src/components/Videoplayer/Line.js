import React, { Component } from "react";



export default class KaraokeLyric extends Component {
    render() {
        const { percentage, text } = this.props;
        let { wrapperStyle, fontStyle, activeStyle } = this.props;
        const defaultWrapperStyle = {
            // position: "relative",
            display: "inline-block",

        };

        const defaultFontStyle = {
            position: "absolute",
            whiteSpace: "nowrap",
            fontSize: "30px",
            color: "white",
            textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            left: 100,
            top: percentage==100 ? 250:percentage==0?350:300,

            //zIndex: 0,
        };

        const defaultActiveStyle = {
            ...defaultFontStyle,
            //position: "absolute",
            /*left: 300,
            top: 300,*/

            color: "blue",
            overflow: "hidden",

            textShadow: "-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white",
            zIndex: 1,
        };

        wrapperStyle = wrapperStyle
            ? {
                ...defaultWrapperStyle,
                ...wrapperStyle
            }
            : defaultWrapperStyle;
        fontStyle = fontStyle
            ? {
                ...defaultFontStyle,
                ...fontStyle
            }
            : defaultFontStyle;
        activeStyle = activeStyle
            ? {
                ...defaultActiveStyle,
                ...activeStyle,
                width: `${percentage}%`
            }
            : {
                ...defaultActiveStyle,

                width: `${percentage}%`
            };

        return (
            <div style={wrapperStyle} >

                <div style={fontStyle}>{text}</div>
                <div style={activeStyle}>{text}</div>

            </div>
        );
    }
}
