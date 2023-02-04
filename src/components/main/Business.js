import Card from "./Card";
function Business() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Business</h2>
        <h4 className="sub-title text-center">講師</h4>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="筒井のぞみ" img="card4.png" title1="ManiCloset 代表" title2="㈱AIR 社長"/>
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="大塚翔太" img="card3.png" title1='エアブラシアーティスト' title2="エアブラシ検定 運営責任者" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="FANFAN" img="card1.jpg" title1="Colors Nail 代表" title2="セミナー講習の活躍" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="MIKA" img="card2.png" title1="Cream Puff 代表" title2="セミナー講習の活躍" />
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="machine" src="../img/machine2.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">自動洗髪機</h2>
            <p className="main-p ">
              当社が人材派遣、貿易、現地案内、ビジネス通訳翻訳など業務を通して  
            中日両国のビューティー業界の架け橋を構築し、
            お客様に選ばれ、喜ばれる会社提案型のサービス企業を目指しています。
            </p>
            {/* <div className="row-inner background-img">
                <img className="img-3d" alt="machine" src="../img/machine3d.png"></img>
            </div> */}
            
          </div>
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
