import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select'
import Form from '../../utilities/Forms'
import { useHistory } from 'react-router-dom';
import NavBarProfil from "./NavBarProfil";
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { Link } from "react-router-dom";
import { fetechMusic } from "../../constant/music/actions_constant"
import ReactAudioPlayer from 'react-audio-player';
import { songs } from './indexImport';

var lamejs = require("lamejs");

const Play = ({match}) => {


    const history = useHistory();
    const historyRefrech = createHistory();

    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));

    const [Data, setData] = useState(userinfos);
    const { username, fullname, email, address, password, gender, mobile, role, createdAt, image } = Data;
    const [userData, setuserData] = useState({ username, fullname, email, address, password, gender, mobile, role, createdAt, image })


    const [music, setMusic] = useState();

    const [song, setSong] = useState();

    const [audioFile,setAudioFile]=useState();
   //setAudioFile(match.params.id)
   const nameMusic = "../../assets/musics"+match.params.id;
    // function bufferToWave(abuffer, len) {
    //     var numOfChan = abuffer.numberOfChannels,
    //         length = len * numOfChan * 2 + 44,
    //         buffer = new ArrayBuffer(length),
    //         view = new DataView(buffer),
    //         channels = [], i, sample,
    //         offset = 0,
    //         pos = 0;
      
    //     // write WAVE header
    //     setUint32(0x46464952);                         // "RIFF"
    //     setUint32(length - 8);                         // file length - 8
    //     setUint32(0x45564157);                         // "WAVE"
      
    //     setUint32(0x20746d66);                         // "fmt " chunk
    //     setUint32(16);                                 // length = 16
    //     setUint16(1);                                  // PCM (uncompressed)
    //     setUint16(numOfChan);
    //     setUint32(abuffer.sampleRate);
    //     setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
    //     setUint16(numOfChan * 2);                      // block-align
    //     setUint16(16);                                 // 16-bit (hardcoded in this demo)
      
    //     setUint32(0x61746164);                         // "data" - chunk
    //     setUint32(length - pos - 4);                   // chunk length
      
    //     // write interleaved data
    //     for(i = 0; i < abuffer.numberOfChannels; i++)
    //       channels.push(abuffer.getChannelData(i));
      
    //     while(pos < length) {
    //       for(i = 0; i < numOfChan; i++) {             // interleave channels
    //         sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
    //         sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767)|0; // scale to 16-bit signed int
    //         view.setInt16(pos, sample, true);          // write 16-bit sample
    //         pos += 2;
    //       }
    //       offset++                                     // next source sample
    //     }
      
    //     // create Blob
    //     return new Blob([buffer], {type: "audio/wav"});
      
    //     function setUint16(data) {
    //       view.setUint16(pos, data, true);
    //       pos += 2;
    //     }
      
    //     function setUint32(data) {
    //       view.setUint32(pos, data, true);
    //       pos += 4;
    //     }
    //   }
   
      
    useEffect(() => {
        //dispatch(fetechMusic( match.params.id)).then((res) => {
           // setAudioFile(res)
           // console.log(bufferToWave(res))
       //  });

       if(match.params.id="aghnyh-alghzalh-raykh-kamlh.mp3")
       {
        setSong(songs.song1);
       }

       if(match.params.id="bones-airplanemode-lyrics.mp")
       {
        setSong(songs.song3);
       }
       if(match.params.id="ghostemane-fed-up-official-music-video.mp3")
       {
        setSong(songs.song4);
       }
      
       if(match.params.id="j2lasteu-kush-2-prod-ro.mp3")
       {
        setSong(songs.song6);
       }
       if(match.params.id="lil-loaded-6locc-6a6y-official-video-shotbydonzo.mp3")
       {
        setSong(songs.song7);
       }
       if(match.params.id="mosyk-byano-nasyny-lyh-mktob-aazf-aaly-aldokhy.mp3")
       {
        setSong(songs.song8);
       }
       if(match.params.id="pop-smoke-invincible-official-lyric-video.mp3")
       {
        setSong(songs.song9);
       }
       if(match.params.id="sugar-mommy-lyrics-the-breaded-king.mp3")
       {
        setSong(songs.song10);
       }


    }, []);
    // function wavToMp3(channels, sampleRate, samples) {
    //     var buffer = [];
    //     var mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
    //     var remaining = samples.length;
    //     var samplesPerFrame = 1152;
    //     for (var i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
    //         var mono = samples.subarray(i, i + samplesPerFrame);
    //         var mp3buf = mp3enc.encodeBuffer(mono);
    //         if (mp3buf.length > 0) {
    //             buffer.push(new Int8Array(mp3buf));
    //         }
    //         remaining -= samplesPerFrame;
    //     }
    //     var d = mp3enc.flush();
    //     if(d.length > 0){
    //         buffer.push(new Int8Array(d));
    //     }
    
    //     var mp3Blob = new Blob(buffer, {type: 'audio/mp3'});
    //     var bUrl = window.URL.createObjectURL(mp3Blob);
    
    //     // send the download link to the console
    //     console.log('mp3 download:', bUrl);
    
    // }
    return (

        <div>



            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={userData.image} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">{userData.fullname}</a></h1>

                    </div>
                    <NavBarProfil />

                </div>
            </header>
            {/* <!-- End Header --> */}


            <main id="main">

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Play Music</h2>
            </div>

            <div className="row">
             
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">

                <div className="row">
                  <div className="col-lg-6">
                   
                   {/* Content */}

                <figure>
                    <figcaption>
                        Listen to music 
                    </figcaption>
                    <audio 
                    controls
                    src={song}

                    >
                        <code> audio</code>
                    </audio>
                    

                </figure>
                {/* End Content */}
                  </div>
            
                  </div>
              </div>
            </div>
          </div>
        </section>

            </main>




        </div>
    );

}
const Shared = {
    color: "green"
}
const NotShared = {
    color: "red"
}
export default Play;

