import React, { useEffect, useState } from "react";
import * as loadingData from "./loading.json";
import * as successData from "./success.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "../App.css";

import { useSelector, useDispatch} from 'react-redux';
import {update_per, destroy_recpay} from '../actions';
import "@lottiefiles/lottie-player";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function LoadingPer(props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  let dispatch = useDispatch();
  let recpay = useSelector(state => state.recPayload);

  useEffect(() => {
    setTimeout(async () => {
      //await fetch("http://127.0.0.1:8000/personality_result/",
      await fetch("https://spr-system.herokuapp.com/personality_result/",
      {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recpay)
      })
        .then(response => {
          let temp = response.json()
          return Promise.all([temp,response])
        })
        .then(([responseData,response]) => {
          setLoading(true);
          setTimeout(() => {
            setSuccess(true);
            //console.log(responseData)
            dispatch(update_per(responseData['info']));
            dispatch(destroy_recpay());
            props.history.push('/PerResult');
          }, 1500);
        })
        .catch(function(error) {
          window.location.reload();
        });  
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!success ? (
          <FadeIn>
            <div style={{ display: "flex" }}>
              <h1></h1>
              {!loading ? (
                <div style={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '25vh'}}>
                  <Lottie options={defaultOptions} height={350} width={350} />
                </div>
              ) : (
                <div style={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '25vh'}}>
                  <Lottie options={defaultOptions2} height={350} width={350} speed={0.5}/>
                </div>
                
              )}
            </div>
          </FadeIn>
        ) : (
          <h1></h1>
        )}
      </header>
      <footer style={{position: 'absolute', bottom: '0'}}>
        <p style={{fontSize: 'calc(0.25em + 0.25vw)'}}>Loading animations by Sara Díaz on LottieFiles: https://lottiefiles.com/8707-loading <br></br>
        Success animations by Thomas Lansonneur on LottieFiles: https://lottiefiles.com/645-success</p>
        {/* <p style={{fontSize: '50%'}}>Success animations by Thomas Lansonneur on LottieFiles: https://lottiefiles.com/645-success</p> */}
      </footer>
    </div>
  );
}

export default LoadingPer;