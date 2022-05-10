import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Results = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoadings(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch(err) {
      setError(err);
    } finally {
      setLoadings(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]); // only run the effect if inputValue changes



  useEffect(() => {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 1000)

      return () => clearTimeout(timer)
  }, [copied]);

  if(loadings) {
    return <p className="noData">Loading...</p>
  }

  if(error) {
    return <p className="noData">Something went wrong </p>
  }

  return (
    <>
    {shortenLink && (
      <div className="result mb-5">
      <p>{shortenLink}</p>
      <CopyToClipboard 
        text={shortenLink} 
        onCopy={() => setCopied(true)}
      >
        <Button className={copied ? "copied" : ""} variant="outline-success">
          Copy
        </Button>
      </CopyToClipboard>
    </div>
    )}
    </>
  );
};

export default Results;
