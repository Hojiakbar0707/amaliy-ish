import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="box1">
          <h1><svg xmlns="http://www.w3.org/2000/svg" width="131" height="27" viewBox="0 0 131 27" fill="none">
            <path d="M17.9951 26.9041C15.016 26.9041 12.0067 26.9041 9.02763 26.9041C6.04851 26.9041 3.00921 26.9041 0 26.9041V0.0661621H8.57625V7.21444C10.141 7.21444 11.7359 7.21444 13.3007 7.21444C14.8655 7.21444 16.4604 7.21444 18.0252 7.21444C19.3191 7.21444 20.1015 7.62929 20.1015 7.62929C20.4024 7.75694 20.7034 7.9165 20.9441 8.10797C21.1848 8.29944 21.4557 8.52283 21.6663 8.77812C22.0876 9.28871 22.4186 9.92695 22.6594 10.6609C22.7195 11.012 22.8098 11.363 22.87 11.7778C22.9302 12.1927 22.9603 12.6076 22.9603 13.0543V21.1919C22.9603 21.6705 22.9302 22.1173 22.87 22.5003C22.8098 22.8832 22.7195 23.2661 22.5992 23.5853C22.4487 24.0001 22.2982 24.3831 22.0876 24.7341C21.877 25.0851 21.6663 25.3404 21.3955 25.5638C21.1848 25.8191 20.914 26.0106 20.6432 26.202C20.3724 26.3935 20.1015 26.4893 19.8307 26.585C19.8307 26.585 18.8978 26.9041 17.9951 26.9041ZM13.3308 11.0758H9.59938C9.44892 11.0758 9.32855 11.1077 9.20818 11.2034C9.08781 11.2992 8.96745 11.3949 8.87717 11.5226C8.72671 11.6502 8.63643 11.7778 8.57625 11.9374C8.51606 12.097 8.48597 12.2565 8.48597 12.4161V21.8301C8.48597 21.9897 8.51606 22.1173 8.60634 22.245C8.69662 22.3726 8.7568 22.5003 8.84708 22.596C8.96745 22.7236 9.08781 22.8194 9.20818 22.8832C9.32855 22.947 9.47901 23.0428 9.62947 23.0428H13.3609C13.4813 23.0428 13.6016 23.0109 13.722 22.9151C13.8424 22.8194 13.9627 22.7556 14.053 22.6279C14.1433 22.5003 14.2336 22.3726 14.2937 22.245C14.3539 22.1173 14.384 21.9578 14.384 21.8301V12.3842C14.384 12.2565 14.3539 12.1289 14.2937 11.9693C14.2336 11.8098 14.1734 11.6502 14.053 11.5545C13.9326 11.4587 13.8424 11.3311 13.722 11.2353C13.6016 11.1396 13.4813 11.0758 13.3308 11.0758Z" fill="#021112" />
            <path d="M25.6385 7.21436H33.4324V8.65039C33.5227 8.45892 33.643 8.26745 33.7634 8.07598C33.8838 7.88451 34.0342 7.75686 34.1546 7.62921C34.3051 7.50156 34.4856 7.40583 34.6361 7.342C34.7865 7.27818 34.9671 7.21436 35.1777 7.21436H43.4531C43.8443 7.21436 44.2054 7.27818 44.5063 7.43774C44.8072 7.5973 45.0479 7.78877 45.2285 8.01215C45.379 8.17171 45.5294 8.36319 45.6197 8.55466C45.71 8.74613 45.8003 8.90569 45.8604 9.06525C45.9206 9.22481 45.9507 9.32054 45.9808 9.38437C46.0109 9.44819 45.9808 9.44819 45.9507 9.35246C46.0109 9.09716 46.0711 8.84187 46.1313 8.61848C46.1915 8.3951 46.3118 8.17171 46.4322 7.98024C46.5526 7.72495 46.703 7.53347 46.8836 7.40583C47.0641 7.27818 47.3049 7.21436 47.5456 7.21436H54.3464C54.8279 7.21436 55.2793 7.27818 55.6705 7.37392C56.0617 7.46965 56.3927 7.62921 56.7237 7.85259C57.0547 8.07598 57.2954 8.29936 57.5362 8.55466C57.7769 8.80995 57.9575 9.12907 58.138 9.44819C58.2885 9.7354 58.4088 10.0226 58.4991 10.3417C58.5894 10.6608 58.6797 10.98 58.7399 11.2991C58.8 11.7139 58.8602 12.1288 58.8903 12.5437C58.9204 12.9585 58.9505 13.3415 58.9505 13.7244V26.8721H51.1566V12.1607C51.1566 12.0011 51.1266 11.8416 51.0664 11.7139C51.0062 11.5863 50.946 11.4906 50.8858 11.3629C50.7955 11.2991 50.7053 11.2353 50.5849 11.1714C50.4645 11.1076 50.3743 11.1076 50.2539 11.1076H47.0039C46.8836 11.1076 46.7933 11.1395 46.6729 11.2033C46.5526 11.2672 46.4924 11.331 46.4322 11.3948C46.372 11.4906 46.3118 11.6182 46.2516 11.7459C46.1915 11.8735 46.1915 11.9692 46.1915 12.0969V26.8721H38.3675V12.2245C38.3675 12.0969 38.3374 11.9692 38.3073 11.8097C38.2772 11.6501 38.217 11.5225 38.1569 11.4267C38.0666 11.2991 37.9462 11.2033 37.8258 11.1395C37.7055 11.0757 37.5249 11.0119 37.3444 11.0119H34.2449C34.1245 11.0119 34.0042 11.0438 33.9139 11.1395C33.8236 11.2353 33.7333 11.331 33.643 11.4586C33.5528 11.5863 33.5227 11.7139 33.4625 11.8416C33.4023 11.9692 33.4023 12.0969 33.4023 12.2245V26.8721H25.6385V7.21436Z" fill="#021112" />
            <path d="M84.5887 13.9795V26.84H77.0356L76.494 24.7338C76.4639 24.8934 76.4338 25.021 76.3736 25.1167C76.3134 25.2125 76.2532 25.3401 76.2231 25.4359C76.163 25.5954 76.1028 25.7231 75.9824 25.8507C75.862 25.9784 75.8018 26.0741 75.7116 26.1698C75.4407 26.3932 75.1699 26.5847 74.8991 26.6804C74.5982 26.7762 74.2672 26.84 73.9361 26.84H66.0821C65.6608 26.84 65.2696 26.8081 64.9386 26.7123C64.6076 26.6166 64.2766 26.5209 64.0057 26.3613C63.7048 26.2017 63.434 26.0103 63.2234 25.7869C63.0127 25.5635 62.8021 25.2763 62.6516 24.9891C62.471 24.67 62.3206 24.287 62.2002 23.8722C62.0799 23.4573 62.0197 23.0425 61.9595 22.6595C61.8993 22.2447 61.8692 21.7979 61.8692 21.383C61.8692 20.9682 61.8391 20.5533 61.8391 20.1704C61.8391 19.8194 61.8391 19.4364 61.8391 19.0535C61.8391 18.6705 61.8692 18.2557 61.8993 17.8408C61.9294 17.426 62.0197 17.043 62.0798 16.6601C62.14 16.2771 62.2604 15.9261 62.4109 15.607C62.5613 15.256 62.772 14.9368 63.0428 14.6496C63.3136 14.3624 63.5845 14.139 63.9456 13.9476C64.2164 13.788 64.5474 13.6923 64.9085 13.5965C65.2696 13.5008 65.6608 13.4689 66.0821 13.4689H74.8389C74.9894 13.4689 75.1699 13.4051 75.3204 13.3093C75.4708 13.2136 75.6514 13.0859 75.7718 12.8945C75.862 12.7987 75.9523 12.6711 76.0125 12.5115C76.0727 12.352 76.1028 12.2243 76.1028 12.0967C76.1028 11.9371 76.0727 11.8095 75.9824 11.6499C75.8921 11.4903 75.8319 11.3627 75.7116 11.267C75.5912 11.1393 75.4708 11.0436 75.3204 10.9798C75.1699 10.9159 75.0495 10.8521 74.8991 10.8521H63.2534V7.11841H79.4731C79.9546 7.11841 80.3758 7.15032 80.767 7.24606C81.1582 7.34179 81.5194 7.46944 81.8504 7.629C82.2416 7.78856 82.5425 8.04385 82.8133 8.29915C83.0841 8.55445 83.3249 8.87356 83.5054 9.19268C83.686 9.47989 83.8665 9.79901 83.9869 10.15C84.1073 10.5011 84.2276 10.8202 84.2878 11.1712C84.4082 11.6499 84.4684 12.1286 84.5286 12.6073C84.5887 13.0859 84.5887 13.5646 84.5887 13.9795ZM76.0727 17.3941H71.92C71.7394 17.3941 71.5589 17.4579 71.3783 17.5536C71.1978 17.6493 71.0473 17.777 70.8968 17.9366C70.7765 18.0961 70.6862 18.2557 70.5658 18.4471C70.4455 18.6386 70.4154 18.7663 70.4154 18.9577V21.766C70.4154 21.8936 70.4455 22.0213 70.5056 22.1489C70.5658 22.2766 70.626 22.4042 70.7163 22.5319C70.8367 22.6595 70.9871 22.7553 71.1376 22.8829C71.288 23.0106 71.4686 23.0425 71.589 23.0425H74.9894C75.1097 23.0425 75.2301 23.0106 75.3806 22.9148C75.531 22.8191 75.6514 22.7233 75.7718 22.5957C75.862 22.5 75.9523 22.3723 76.0125 22.2447C76.0727 22.117 76.1028 21.9894 76.1028 21.8617V17.3941H76.0727Z" fill="#021112" />
            <path d="M96.2953 26.904H87.689V7.21436H96.2953V8.96951C96.4157 8.77804 96.5661 8.58657 96.7467 8.3951C96.8069 8.29936 96.8972 8.20363 97.0175 8.10789C97.1379 8.01215 97.2282 7.94833 97.3184 7.91642C97.4689 7.82068 97.5893 7.72495 97.7397 7.62921C97.8902 7.53347 98.0106 7.46965 98.161 7.43774C98.3115 7.37392 98.492 7.342 98.6425 7.31009C98.793 7.27818 98.9434 7.24627 99.0939 7.24627H104.21V12.7032H99.6957C99.2443 12.7032 98.8231 12.767 98.4619 12.8628C98.0708 12.9585 97.7096 13.0862 97.4388 13.2776C97.2884 13.3414 97.1379 13.4372 97.0175 13.5648C96.8972 13.6925 96.8069 13.8201 96.6865 13.9478C96.5361 14.1073 96.4458 14.2669 96.3856 14.4584C96.3254 14.6498 96.2953 14.8413 96.2953 15.0647V26.904Z" fill="#021112" />
            <path d="M115.222 14.0438L122.594 7.24656H128.011L122.925 11.9695L130.84 26.9362H120.638L116.606 17.7137L115.192 19.1816V27.0001L106.646 26.9682V0.162109H115.192V14.0438H115.222Z" fill="#021112" />
          </svg></h1>
        </div>
        <div className="box">
          <li> <NavLink to="/">Home</NavLink></li>
          <a href="#">Listing</a>
          <a href="#">Property</a>
          <a href="#">Agents</a>
          <a href="#">Blog</a>
        </div>
        <div className="box2">
          <li> <NavLink to="login">login</NavLink></li>
        </div>
      </div>
    </div>
  )
}
export function CArdone ({rasm,matn,matn2}){
  return(
    <div className="hello">
    <div className="asa">
    <img src={rasm} alt="sc" />
    <h4 className="xat">{matn}</h4>
    </div>
    <h1 className="xat2">{matn2}</h1>

    </div>
  )
}

export default Navbar