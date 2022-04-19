import React, {forwardRef, useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
//import BookmarkIcon from "@material-ui/icons/Bookmark";
//import SaveIcon from "@material-ui/icons/Save";
//import FastRewindIcon from "@material-ui/icons/FastRewind";
//import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import FullScreen from "@material-ui/icons/Fullscreen";
import Popover from "@material-ui/core/Popover";
//import {Save} from "@material-ui/icons";
//import Webcam from "react-webcam";
import ScreenRecording from "./ScreenRecording";
import Waveform from "./Waveform";

const useStyles = makeStyles((theme) => ({
  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  button: {
    margin: theme.spacing(1),
  },
  controlIcons: {
    color: "#777",

    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: 100,
  },
}));

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      volume,
      onVolumeChange,
      onBookmark,
      myVideo,
      userVideo,
        song,
        songName,
        audRef,
        vidOnOff,
        audOnOff,
        videoOnOff,
        audioOnOff,
        isOpenVideoModal2,
        recordedVideoUrl2,
        recorder2,

    },
    ref
  ,props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
const[recState,setRecState]=useState(true);
const[isOpenVideoModal,setIsOpenVideoModal]=useState(false);
const[recordedVideoUrl,setRecordedVideoUrl]=useState(null);
const[ downloadScreenRecordVideo,setDownloadScreenRecordVideo]=useState(null);
const[recorder,setRecorder]=useState(null);


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
useEffect(()=>{
if(isOpenVideoModal===true) {
    isOpenVideoModal2(isOpenVideoModal)
    recordedVideoUrl2(recordedVideoUrl)

    recorder2(recorder)
}
},[isOpenVideoModal]);
/*
const yy=useRef(null);
    useEffect(() => {
      yy.current.srcObject= this.props.recvidlist.current;


    }, []);*/

    const handleClose = () => {
      setAnchorEl(null);
    };
const [play,setPlay]=useState(false);
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    /*const thumbs =
        <div>

          {this.props.song ? <Waveform songup={this.props.song}/> : null}
        </div>
*/
    return (
        <div>

      <div ref={ref} className={classes.controlsWrapper}>

        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ flexGrow: 1 }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            style
            style={{ padding: 16 }}
          >
            <Grid item>
              <Typography variant="h5" style={{ color: "#fff" }}>
                  {songName ? songName:null}
              </Typography>
            </Grid>
            <Grid item>


              <ScreenRecording
                  myVideo={myVideo}
                  userVideo={userVideo}
                  audRef={audRef}
                  recState={(e)=>setRecState(e)}

                  isOpenVideoModal={(e)=>setIsOpenVideoModal(e)}

                  recordedVideoUrl={(e)=>setRecordedVideoUrl(e)}
                  downloadScreenRecordVideo={(e)=>setDownloadScreenRecordVideo(e)}
                  recorder={(e)=>setRecorder(e)}


                 />





            </Grid>


          </Grid>
            <Grid
                container direction="row" alignItems="center" justify="flex-end"
            >
            <Grid>

                {/*<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"  fill="currentColor"
                     className="bi bi-camera-video-off" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56-10-14 .814-.58 10 14-.814.58z"/>
                </svg>*/}
                <button onClick={()=>videoOnOff(!vidOnOff)}>Video</button>
            </Grid>
                <Grid>
                    <button onClick={()=>audioOnOff(!audOnOff)}>Audio</button>
                </Grid>
            </Grid>

          <Grid container direction="row" alignItems="center" justify="center">

            {/*<IconButton
              onClick={onRewind}
              className={classes.controlIcons}
              aria-label="rewind"
            >
              <FastRewindIcon
                className={classes.controlIcons}
                fontSize="inherit"
              />
            </IconButton>
            <IconButton
              onClick={onPlayPause}
              className={classes.controlIcons}
              aria-label="play"
            >
              {playing ? (
                <PauseIcon fontSize="inherit" />
              ) : (
                <PlayArrowIcon fontSize="inherit" />
              )}
            </IconButton>
            <IconButton
              onClick={onFastForward}
              className={classes.controlIcons}
              aria-label="forward"
            >
              <FastForwardIcon fontSize="inherit" />
            </IconButton>*/}
          </Grid>
          {/* bottom controls */}
            <Grid
                container
                direction="column"
                justify="end"
                //alignItems="center"
                >

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="start"
            style={{ padding: 16 }}
          >
            <Grid  item xs={12}>
                {/*<PrettoSlider
                min={0}
                max={100}
                ValueLabelComponent={(props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                )}
                aria-label="custom thumb label"
                value={played * 100}
                onChange={onSeek}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onSeekMouseUp}
                onDuration={onDuration}
              />*/}
                {/*audRef.current.srcObject=song*/}

                {song ? <Waveform ref={audRef}  songup={song} play={play} redo={(e)=>setPlay(e)} audRef={audRef} recState={recState}/> : null}


            </Grid>

            <Grid item>
              <Grid container alignItems="center">
                <IconButton
                  onClick={()=>setPlay(!play)}
                  className={classes.bottomIcons}
                >
                  {play ? (
                    <PauseIcon fontSize="large" />
                  ) : (
                    <PlayArrowIcon fontSize="large" />
                  )}
                </IconButton>

                <IconButton
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className={`${classes.bottomIcons} ${classes.volumeButton}`}
                >
                  {muted ? (
                    <VolumeMute fontSize="large" />
                  ) : volume > 0.5 ? (
                    <VolumeUp fontSize="large" />
                  ) : (
                    <VolumeDown fontSize="large" />
                  )}
                </IconButton>

                <Slider
                  min={0}
                  max={100}
                  value={muted ? 0 : volume * 100}
                  onChange={onVolumeChange}
                  aria-labelledby="input-slider"
                  className={classes.volumeSlider}
                  onMouseDown={onSeekMouseDown}
                  onChangeCommitted={onVolumeSeekDown}
                />
                <Button
                  variant="text"
                  onClick={
                    onChangeDispayFormat
                    //     () =>
                    //   setTimeDisplayFormat(
                    //     timeDisplayFormat == "normal" ? "remaining" : "normal"
                    //   )
                  }
                >
                  <Typography
                    variant="body1"
                    style={{ color: "#fff", marginLeft: 16 }}
                  >
                    {elapsedTime}/{totalDuration}
                  </Typography>
                </Button>

              </Grid>

            </Grid>

            <Grid item>
              <Button
                onClick={handleClick}
                aria-describedby={id}
                className={classes.bottomIcons}
                variant="text"
              >
                <Typography>{playbackRate}X</Typography>
              </Button>
              {/*thumbs*/}



              <Popover
                container={ref.current}
                open={open}
                id={id}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Grid container direction="column-reverse">
                  {[0.5, 1, 1.5, 2].map((rate) => (
                    <Button
                      key={rate}
                      //   onClick={() => setState({ ...state, playbackRate: rate })}
                      onClick={() => onPlaybackRateChange(rate)}
                      variant="text"
                    >
                      <Typography
                        color={rate === playbackRate ? "secondary" : "inherit"}
                      >
                        {rate}X
                      </Typography>
                    </Button>
                  ))}
                </Grid>
              </Popover>
              <IconButton
                onClick={onToggleFullScreen}
                className={classes.bottomIcons}
              >
                <FullScreen fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </div>
        </div>
    );
  }
);

Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;
