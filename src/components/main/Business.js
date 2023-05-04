import Card from "./Card";
import './animations.css';
import React, { useRef, useEffect } from 'react';
import './CardRow.css';




function Business() {
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger the callback when 10% of the element is visible
      }
    );
  
    // Observe the cards
    observer.observe(card1Ref.current);
    observer.observe(card2Ref.current);
    observer.observe(card3Ref.current);
    observer.observe(card4Ref.current);
  
    // Copy the ref values to variables
    const card1Current = card1Ref.current;
    const card2Current = card2Ref.current;
    const card3Current = card3Ref.current;
    const card4Current = card4Ref.current;
  
    // Clean up the observer on unmount
    return () => {
      observer.unobserve(card1Current);
      observer.unobserve(card2Current);
      observer.unobserve(card3Current);
      observer.unobserve(card4Current);
    };
  }, []);
  

  return (
    <div className="container services">
        <h2 className="main-title text-center">Business</h2>
        <h4 className="sub-title text-center">講師</h4>
        <div className="card-cover">

        <div className="col-md-12">
          <div className="row card-grid">
            <div className="mb-2 fade-up" ref={card1Ref}>
              <Card title="筒井のぞみ" img="card4.png" title1="ManiCloset 代表" title2="㈱AIR 社長" />
            </div>
            <div className="mb-2 fade-up" ref={card2Ref}>
              <Card title="大塚翔太" img="card3.png" title1="エアブラシアーティスト" title2="エアブラシ検定 運営責任者" />
            </div>
            <div className="mb-2 fade-up" ref={card3Ref}>
              <Card title="FANFAN" img="card1.jpg" title1="Colors Nail 代表" title2="セミナー講習の活躍" />
            </div>
            <div className="mb-2 fade-up" ref={card4Ref}>
              <Card title="MIKA" img="card2.png" title1="Cream Puff 代表" title2="セミナー講習の活躍" />
            </div>
          </div>
        </div>

    </div>

        <div className="row">
          {/* <div className="col-md-6 text-center">
            <img alt="machine" src={process.env.PUBLIC_URL+"/img/machine2.png"}className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">自動洗髪機</h2>
            <p className="main-p ">
            AI機能を搭載し、心地よい水流を実現させパーマ剤やカラー剤もしっかり除去でき「髪にも頭皮にも優しい自動洗髪機」です。
            </p>
            <div className="row-inner background-img">
                <img className="img-3d" alt="machine" src="../img/machine3d.png"></img>
            </div>
            
          </div> */}
        </div>
        {/* <h4 className="sub-title text-center">エアブラシ検定試験</h4>
        <div>
        <p align="center" className = "p-video">
            <iframe
                src="/video.mp4"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"

            />{" "}
            </p>
         </div> */}

    </div>
  );
}
export default Business;
