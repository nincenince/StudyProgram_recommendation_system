import React, { useEffect, useState } from "react";
import * as loadingData from "./loading.json";
import * as successData from "./success.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "../App.css";

import { useSelector, useDispatch} from 'react-redux';
import { update_comefrom , update_per, update_edu} from '../actions';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function Loading(props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  let token = useSelector(state => state.token)
  let isAdmin = useSelector(state => state.isAdmin);
  let dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      //await fetch("http://127.0.0.1:8000/get_nescessary/",
      await fetch("https://spr-system.herokuapp.com/get_nescessary/",
      {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "token": token
        })
      })
        .then(response => {
          //console.log(response.json())
          let temp = response.json()
          //console.log(temp)
          return Promise.all([temp,response])
          //dispatch(update_edu(response.object['1']['info']));
          //dispatch(update_per(response.object['2']));
        })
        .then(([responseData,response]) => {
          setLoading(true);
          setTimeout(() => {
            setSuccess(true);
            //console.log(responseData)
            dispatch(update_edu(responseData['1']['info']));
            dispatch(update_per(responseData['2']));
            props.history.push('/');
          }, 1500);
        });
    }, 6000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!success ? (
          <FadeIn>
            <div style={{ display: "flex" }}>
              <h1></h1>
              {!loading ? (
                <Lottie options={defaultOptions} height={140} width={140} />
              ) : (
                <Lottie options={defaultOptions2} height={140} width={140} />
              )}
            </div>
          </FadeIn>
        ) : (
          <h1></h1>
        )}
      </header>
    </div>
  );
}

export default Loading;