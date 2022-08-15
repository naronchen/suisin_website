function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/suisin_logo.svg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            当社が人材派遣、貿易、現地案内、ビジネス通訳翻訳など業務を通して　
            中日両国のビューティー業界の架け橋を構築し、お客様に選ばれ、喜ばれる会社提案型のサービス企業を目指しています。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
