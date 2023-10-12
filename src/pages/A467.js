import MainData from "../components/MainData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const A467 = () => {

  const pdfRef = useRef();
  const downloadPDF =()=>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth , pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2 ;
      const imgY = 30;
      pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
      pdf.save('report.pdf');

    })
  }
  return (
    <div className="relative bg-white w-full h-[52.63rem] overflow-hidden text-left text-[0.56rem] text-main-void-600 font-poppins" ref={pdfRef}>
      <div className="absolute top-[50rem] left-[calc(50%_-_281.5px)] [background:linear-gradient(90.22deg,_#005dff,_#00a3ff_44.27%,_#21ddff)] w-[35.19rem] h-[0.13rem]" />
      <div className="absolute top-[1rem] left-[calc(50%_-_281.5px)] w-[35.63rem] h-[1.63rem]">
        <img
          className="absolute top-[0rem] left-[calc(50%_-_285px)] w-[5.75rem] h-[1rem] overflow-hidden"
          alt=""
          src="/realassistai-logo-full-colour-rgb-1.svg"
        />
        <div className="absolute top-[1.5rem] left-[calc(50%_-_285px)] [background:linear-gradient(90.22deg,_#005dff,_#00a3ff_44.27%,_#21ddff)] w-[35.19rem] h-[0.13rem]" />
        <div className="absolute top-[0rem] left-[24.44rem] leading-[1rem] font-black">
          123 Main Street, Dover, NH 03820-4667
        </div>
      </div>
      <div className="absolute top-[50.63rem] left-[24.69rem] leading-[1rem] font-black text-right">
        <span>{`RealAssist Property Report | Page 1 `}</span>
        <span className="text-secondary-blueberry-patch-600">of 25</span>
      </div>
      <div className="absolute top-[50.63rem] left-[1rem] leading-[1rem] font-black text-blue">
        Report Genereted on September 26, 2023
      </div>
      <div className="absolute top-[5.13rem] left-[calc(50%_-_281.5px)] rounded-t-none rounded-b-xl bg-whitesmoke-200 w-[35.19rem] h-[7.31rem]" />
      <div className="absolute top-[3.63rem] left-[calc(50%_-_281.5px)] w-[35.19rem] h-[1.5rem] text-blue">
        <div className="absolute top-[0rem] left-[calc(50%_-_281.5px)] rounded-t-[12.76px] rounded-b-none bg-chun-li-blue-100 w-[35.19rem] h-[1.5rem]" />
        <div className="absolute top-[0.44rem] left-[0.8rem] leading-[0.63rem] font-medium">
          Location Information
        </div>
      </div>
      <div className="absolute top-[13.19rem] left-[calc(50%_-_281.5px)] w-[35.19rem] h-[1.5rem] text-blue">
        <div className="absolute top-[0rem] left-[calc(50%_-_281.5px)] rounded-t-[12.76px] rounded-b-none bg-chun-li-blue-100 w-[35.19rem] h-[1.5rem]" />
        <div className="absolute top-[0.44rem] left-[0.8rem] leading-[0.63rem] font-medium">
          Location Information
        </div>
      </div>
      <div className="absolute top-[14.69rem] left-[calc(50%_-_281.5px)] rounded-t-none rounded-b-xl bg-whitesmoke-200 w-[35.19rem] h-[4.63rem]" />
      <div className="absolute top-[13.19rem] left-[calc(50%_-_281.5px)] w-[35.19rem] h-[1.5rem] text-blue">
        <div className="absolute top-[0rem] left-[calc(50%_-_281.5px)] rounded-t-[12.76px] rounded-b-none bg-chun-li-blue-100 w-[35.19rem] h-[1.5rem]" />
        <div className="absolute top-[0.44rem] left-[0.8rem] leading-[0.63rem] font-medium">
          Appliances
        </div>
      </div>
      <div className="absolute top-[5.88rem] left-[2rem] w-[33.19rem] h-[3.75rem] text-secondary-blueberry-patch-600">
        <div className="absolute top-[0rem] left-[0rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Census Tract</p>
          </div>
          <div className="absolute top-[0rem] left-[30.75rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">081200</p>
          </div>
        </div>
        <div className="absolute top-[1.31rem] left-[0rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Carrier Route</p>
          </div>
          <div className="absolute top-[0rem] left-[31.69rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">C011</p>
          </div>
        </div>
        <div className="absolute top-[2.63rem] left-[0rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Assessor's Parcel Number (APN)</p>
          </div>
          <div className="absolute top-[0rem] left-[25.25rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">Dovr M:l0095 B: L:1p000</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[21.81rem] left-[calc(50%_-_281.5px)] w-[35.19rem] h-[12.75rem] text-secondary-blueberry-patch-600">
        <div className="absolute top-[1.5rem] left-[calc(50%_-_281.5px)] rounded-t-none rounded-b-xl bg-whitesmoke-200 w-[35.19rem] h-[11.25rem]" />
        <div className="absolute top-[0rem] left-[calc(50%_-_281.5px)] w-[35.19rem] h-[1.5rem] text-blue">
          <div className="absolute top-[0rem] left-[calc(50%_-_281.5px)] rounded-t-[12.76px] rounded-b-none bg-chun-li-blue-100 w-[35.19rem] h-[1.5rem]" />
          <div className="absolute top-[0.44rem] left-[0.8rem] leading-[0.63rem] font-medium">
            Income
          </div>
        </div>
        <div className="absolute top-[2.25rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Median Household Income</p>
          </div>
          <div className="absolute top-[0rem] left-[30.38rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">$82,464</p>
          </div>
        </div>
        <div className="absolute top-[6.19rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Median Non-Family Household Income</p>
          </div>
          <div className="absolute top-[0rem] left-[30.38rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">$52,990</p>
          </div>
        </div>
        <div className="absolute top-[10.13rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Age 18-64 Years Below Poverty Level</p>
          </div>
          <div className="absolute top-[0rem] left-[31.19rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">9.30%</p>
          </div>
        </div>
        <div className="absolute top-[3.56rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Median Family Income</p>
          </div>
          <div className="absolute top-[0rem] left-[30.56rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">$115,513</p>
          </div>
        </div>
        <div className="absolute top-[7.5rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Percent Below Poverty Level</p>
          </div>
          <div className="absolute top-[0rem] left-[31.13rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">8.00%</p>
          </div>
        </div>
        <div className="absolute top-[11.44rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Age 65 Years+ Below Poverty Level</p>
          </div>
          <div className="absolute top-[0rem] left-[31.13rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">4.90%</p>
          </div>
        </div>
        <div className="absolute top-[4.88rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">Median Married-Couple Family Income</p>
          </div>
          <div className="absolute top-[0rem] left-[30.19rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">$128,024</p>
          </div>
        </div>
        <div className="absolute top-[8.81rem] left-[1rem] w-[33.19rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
            <p className="m-0">{`Age 18 Years & Younger Below Poverty Level`}</p>
          </div>
          <div className="absolute top-[0rem] left-[31.13rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
            <p className="m-0">5.90%</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[9.81rem] left-[2rem] w-[33.19rem] h-[1.13rem] text-secondary-blueberry-patch-600">
        <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
          <p className="m-0">Alternate APN</p>
        </div>
        <div className="absolute top-[0rem] left-[32.75rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
          -
        </div>
      </div>
      <div className="absolute top-[11.13rem] left-[2rem] w-[33.19rem] h-[1.13rem] text-secondary-blueberry-patch-600">
        <div className="absolute top-[0rem] left-[0rem] leading-[0.56rem] font-medium">
          <p className="m-0">Tax Account Number</p>
        </div>
        <div className="absolute top-[0rem] left-[32.75rem] text-[0.69rem] leading-[0.56rem] font-medium text-main-void-600 text-right">
          -
        </div>
      </div>
      {/* <div className="absolute top-[15.13rem] left-[11.13rem] w-[15.94rem] h-[3.75rem] text-[0.63rem] text-main-void-400">
        <img
          className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[3.75rem] overflow-hidden mix-blend-luminosity"
          alt=""
          src="/indir-11-1.svg"
        />
        <div className="absolute top-[1.56rem] left-[4.75rem] leading-[0.63rem] font-medium">
          There is no data currently available
        </div>
      </div> */}
      <div className="absolute top-[35.06rem] left-[calc(50%_-_281.5px)] w-[35.19rem] h-[1.5rem] text-[0.63rem]">
        <div className="absolute top-[0.75rem] left-[calc(50%_-_281.5px)] [background:linear-gradient(90.22deg,_#005dff,_#00a3ff_44.27%,_#21ddff)] w-[35.19rem] h-[0.13rem]" />
        <div className="absolute top-[0rem] left-[0rem] bg-white flex flex-row items-center justify-start py-[0rem] pr-[0.5rem] pl-[0rem] gap-[0.25rem]">
          <img
            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
            alt=""
            src="/hugeiconnavigation-mapsbulklocationshare1.svg"
          />
          <div className="relative leading-[1.5rem] font-medium">Crime</div>
        </div>
      </div>
      <MainData />
      <div className="absolute top-[3.63rem] left-[calc(50%_-_280.5px)] w-[35.13rem] h-[8.82rem] text-[1rem]">
        <div className="absolute top-[0rem] left-[calc(50%_-_281px)] rounded-2xl bg-whitesmoke-100 w-[35.13rem] h-[8.82rem]" />
        <div className="absolute top-[0rem] left-[calc(50%_-_281px)] rounded-t-2xl rounded-b-none bg-chun-li-blue-100 w-[35.13rem] h-[1.57rem]" />
        <div className="absolute top-[2.2rem] left-[0.8rem] rounded-2xl bg-white box-border w-[33.53rem] h-[5.98rem] border-[1px] border-solid border-tertiary-blue-hydrangea-300" />
        <div className="absolute top-[2.2rem] left-[0.8rem] w-[33.53rem] h-[5.98rem]">
          <div className="absolute top-[0.94rem] left-[4.83rem] [filter:blur(12px)] w-[27.41rem] h-[4.09rem] opacity-[0.8] mix-blend-luminosity">
            <div className="absolute top-[0rem] left-[0rem] w-[8.76rem] h-[4.09rem]">
              {/* <div className="absolute top-[0rem] left-[0.7rem] leading-[1rem] font-medium inline-block w-[7.36rem] h-[0.63rem]">
                Plunk Home Value™
              </div> */}
              {/* <div className="absolute top-[1.26rem] left-[0rem] leading-[2rem] font-black text-chun-li-blue-500 inline-block w-[8.76rem] h-[1.26rem] text-[2rem]">
                <span>$992,449</span>
                <span className="text-[1.13rem]">.94</span>
              </div> */}
              <div className="absolute top-[3.15rem] left-[1.19rem] w-[6.42rem] h-[0.94rem] text-[1.13rem] text-greenish-teal-700">
                <div className="absolute top-[0rem] left-[0rem] w-[6.42rem] h-[0.94rem]">
                  {/* <div className="absolute top-[0rem] left-[1.19rem] w-[5.22rem] h-[0.94rem]">
                    <div className="absolute top-[0rem] left-[0rem] leading-[1.5rem] font-black inline-block w-[3.53rem] h-[0.94rem]">
                      $299.62
                    </div>
                    <div className="absolute top-[0rem] left-[3.73rem] text-[0.88rem] leading-[1.5rem] font-black inline-block w-[1.49rem] h-[0.94rem]">
                      /day
                    </div>
                  </div>
                  <img
                    className="absolute top-[0rem] left-[0rem] w-[1.19rem] h-[0.94rem] overflow-hidden"
                    alt=""
                    src="/hugeiconarrowssolidarrowleft1.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className="absolute top-[0rem] left-[15.72rem] w-[11.69rem] h-[4.09rem] text-[0.88rem] text-blue">
              <div className="absolute top-[0rem] left-[0rem] w-[11.69rem] h-[1.89rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-chun-li-blue-100 w-[11.69rem] h-[1.89rem]" />
                {/* <div className="absolute top-[0.47rem] left-[2.09rem] w-[7.56rem] h-[0.94rem]">
                  <div className="absolute top-[0.16rem] left-[0rem] leading-[1rem] font-black inline-block w-[5.97rem] h-[0.63rem]">
                    Improve accuracy
                  </div>
                  <img
                    className="absolute top-[0rem] left-[6.37rem] w-[1.19rem] h-[0.94rem] overflow-hidden"
                    alt=""
                    src="/hugeiconarrowssolidarrowleft2.svg"
                  />
                </div> */}
              </div>
              <div className="absolute top-[2.83rem] left-[0.9rem] w-[9.94rem] h-[1.26rem] text-[1rem] text-greenish-teal-700">
                {/* <div className="absolute top-[0.51rem] left-[0rem] leading-[1rem] font-medium inline-block w-[4.38rem] h-[0.63rem]">
                  Powered by
                </div>
                <img
                  className="absolute top-[0rem] left-[4.78rem] w-[5.16rem] h-[1.26rem] overflow-hidden"
                  alt=""
                  src="/logo-color-hrze9569ddee176b597ee1c6b57722999a7-1.svg"
                /> */}
              </div>
            </div>
            <div className="absolute top-[0rem] left-[11.89rem] bg-tertiary-blue-hydrangea-300 w-[0.05rem] h-[4.09rem]" />
          </div>
        </div>
        <div className="absolute top-[4.25rem] left-[11.09rem] w-[12.94rem] h-[1.89rem] text-[0.56rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[1.89rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-2xl [background:linear-gradient(263.58deg,_#1a56db,_rgba(26,_86,_219,_0.34))] w-[12.94rem] h-[1.89rem]" />
            <img
              className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[1.89rem]"
              alt=""
              src="/mask-group.svg"
            />
            <div className="absolute top-[0.44rem] left-[2.72rem] w-[9.06rem] h-[0.63rem]">
              <div className="absolute top-[0rem] left-[0rem] leading-[1rem] font-black inline-block w-[9.06rem] h-[0.63rem]">
                Only Focus on Crime Graph
              <div>
              
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[13rem] left-[calc(50%_-_281.5px)] w-[35.13rem] h-[7.94rem] text-[1rem]">
        <div className="absolute top-[0rem] left-[calc(50%_-_281px)] rounded-2xl bg-whitesmoke-100 w-[35.13rem] h-[7.94rem]" />
        <div className="absolute top-[0rem] left-[calc(50%_-_281px)] rounded-t-2xl rounded-b-none bg-chun-li-blue-100 w-[35.13rem] h-[1.42rem]" />
        <div className="absolute top-[1.98rem] left-[0.8rem] rounded-2xl bg-white box-border w-[33.53rem] h-[5.39rem] border-[1px] border-solid border-tertiary-blue-hydrangea-300" />
        <div className="absolute top-[1.98rem] left-[0.8rem] w-[33.53rem] h-[5.39rem]">
          <div className="absolute top-[0.85rem] left-[4.83rem] [filter:blur(12px)] w-[27.41rem] h-[3.69rem] opacity-[0.8] mix-blend-luminosity">
            <div className="absolute top-[0rem] left-[0rem] w-[8.76rem] h-[3.69rem]">
              {/* <div className="absolute top-[0rem] left-[0.7rem] leading-[1rem] font-medium inline-block w-[7.36rem] h-[0.57rem]">
                Plunk Home Value™
              </div>
              <div className="absolute top-[1.13rem] left-[0rem] leading-[2rem] font-black text-chun-li-blue-500 inline-block w-[8.76rem] h-[1.13rem] text-[2rem]">
                <span>$992,449</span>
                <span className="text-[1.13rem]">.94</span>
              </div> */}
              <div className="absolute top-[2.84rem] left-[1.19rem] w-[6.42rem] h-[0.85rem] text-[1.13rem] text-greenish-teal-700">
                <div className="absolute top-[0rem] left-[0rem] w-[6.42rem] h-[0.85rem]">
                  {/* <div className="absolute top-[0rem] left-[1.19rem] w-[5.22rem] h-[0.85rem]">
                    <div className="absolute top-[0rem] left-[0rem] leading-[1.5rem] font-black inline-block w-[3.53rem] h-[0.85rem]">
                      $299.62
                    </div>
                    <div className="absolute top-[0rem] left-[3.73rem] text-[0.88rem] leading-[1.5rem] font-black inline-block w-[1.49rem] h-[0.85rem]">
                      /day
                    </div>
                  </div> */}
                  {/* <img
                    className="absolute top-[0rem] left-[0rem] w-[1.19rem] h-[0.85rem] overflow-hidden"
                    alt=""
                    src="/hugeiconarrowssolidarrowleft3.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className="absolute top-[0rem] left-[15.72rem] w-[11.69rem] h-[3.69rem] text-[0.88rem] text-blue">
              <div className="absolute top-[0rem] left-[0rem] w-[11.69rem] h-[1.7rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-chun-li-blue-100 w-[11.69rem] h-[1.7rem]" />
                <div className="absolute top-[0.43rem] left-[2.09rem] w-[7.56rem] h-[0.85rem]">
                  {/* <div className="absolute top-[0.14rem] left-[0rem] leading-[1rem] font-black inline-block w-[5.97rem] h-[0.57rem]">
                    Improve accuracy
                  </div>
                  <img
                    className="absolute top-[0rem] left-[6.37rem] w-[1.19rem] h-[0.85rem] overflow-hidden"
                    alt=""
                    src="/hugeiconarrowssolidarrowleft4.svg"
                  /> */}
                </div>
              </div>
              <div className="absolute top-[2.55rem] left-[0.9rem] w-[9.94rem] h-[1.13rem] text-[1rem] text-greenish-teal-700">
                {/* <div className="absolute top-[0.46rem] left-[0rem] leading-[1rem] font-medium inline-block w-[4.38rem] h-[0.57rem]">
                  Powered by
                </div>
                <img
                  className="absolute top-[0rem] left-[4.78rem] w-[5.16rem] h-[1.13rem] overflow-hidden"
                  alt=""
                  src="/logo-color-hrze9569ddee176b597ee1c6b57722999a7-11.svg"
                /> */}
              </div>
            </div>
            <div className="absolute top-[0rem] left-[11.89rem] bg-tertiary-blue-hydrangea-300 w-[0.05rem] h-[3.69rem]" />
          </div>
        </div>
        <div className="absolute top-[3.83rem] left-[11.09rem] w-[12.94rem] h-[1.7rem] text-[0.56rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[1.7rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-2xl [background:linear-gradient(263.58deg,_#1a56db,_rgba(26,_86,_219,_0.34))] w-[12.94rem] h-[1.7rem]" />
            <img
              className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[1.7rem]"
              alt=""
              src="/mask-group1.svg"
            />
            <div onClick={downloadPDF} className="absolute top-[0.39rem] left-[2.72rem] w-[9.06rem] h-[0.57rem]">
              <div className="absolute top-[0rem] left-[0rem] leading-[1rem] font-black inline-block w-[9.06rem] h-[0.57rem]">
               click to download the report pdf
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[22.06rem] left-[calc(50%_-_281.5px)] w-[35.13rem] h-[12.31rem] text-[1rem]">
        <div className="absolute top-[0rem] left-[calc(50%_-_281px)] rounded-2xl bg-whitesmoke-100 w-[35.13rem] h-[12.31rem]" />
        <div className="absolute top-[0rem] left-[calc(50%_-_281px)] rounded-t-2xl rounded-b-none bg-chun-li-blue-100 w-[35.13rem] h-[2.2rem]" />
        <div className="absolute top-[3.08rem] left-[0.8rem] rounded-2xl bg-white box-border w-[33.53rem] h-[8.36rem] border-[1px] border-solid border-tertiary-blue-hydrangea-300" />
        <div className="absolute top-[3.08rem] left-[0.8rem] w-[33.53rem] h-[8.36rem]">
          <div className="absolute top-[1.32rem] left-[4.83rem] [filter:blur(12px)] w-[27.41rem] h-[5.72rem] opacity-[0.8] mix-blend-luminosity">
            <div className="absolute top-[0rem] left-[0rem] w-[8.76rem] h-[5.72rem]">
              {/* <div className="absolute top-[0rem] left-[0.7rem] leading-[1rem] font-medium inline-block w-[7.36rem] h-[0.88rem]">
                Plunk Home Value™
              </div>
              <div className="absolute top-[1.76rem] left-[0rem] leading-[2rem] font-black text-chun-li-blue-500 inline-block w-[8.76rem] h-[1.76rem] text-[2rem]">
                <span>$992,449</span>
                <span className="text-[1.13rem]">.94</span>
              </div> */}
              <div className="absolute top-[4.4rem] left-[1.19rem] w-[6.42rem] h-[1.32rem] text-[1.13rem] text-greenish-teal-700">
                <div className="absolute top-[0rem] left-[0rem] w-[6.42rem] h-[1.32rem]">
                  <div className="absolute top-[0rem] left-[1.19rem] w-[5.22rem] h-[1.32rem]">
                    {/* <div className="absolute top-[0rem] left-[0rem] leading-[1.5rem] font-black inline-block w-[3.53rem] h-[1.32rem]">
                      $299.62
                    </div>
                    <div className="absolute top-[0rem] left-[3.73rem] text-[0.88rem] leading-[1.5rem] font-black inline-block w-[1.49rem] h-[1.32rem]">
                      /day
                    </div> */}
                  </div>
                  {/* <img
                    className="absolute top-[0rem] left-[0rem] w-[1.19rem] h-[1.32rem] overflow-hidden"
                    alt=""
                    src="/hugeiconarrowssolidarrowleft5.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className="absolute top-[0rem] left-[15.72rem] w-[11.69rem] h-[5.72rem] text-[0.88rem] text-blue">
              <div className="absolute top-[0rem] left-[0rem] w-[11.69rem] h-[2.64rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-chun-li-blue-100 w-[11.69rem] h-[2.64rem]" />
                <div className="absolute top-[0.66rem] left-[2.09rem] w-[7.56rem] h-[1.32rem]">
                  {/* <div className="absolute top-[0.22rem] left-[0rem] leading-[1rem] font-black inline-block w-[5.97rem] h-[0.88rem]">
                    Improve accuracy
                  </div>
                  <img
                    className="absolute top-[0rem] left-[6.37rem] w-[1.19rem] h-[1.32rem] overflow-hidden"
                    alt=""
                    src="/hugeiconarrowssolidarrowleft6.svg"
                  /> */}
                </div>
              </div>
              <div className="absolute top-[3.96rem] left-[0.9rem] w-[9.94rem] h-[1.76rem] text-[1rem] text-greenish-teal-700">
                {/* <div className="absolute top-[0.71rem] left-[0rem] leading-[1rem] font-medium inline-block w-[4.38rem] h-[0.88rem]">
                  Powered by
                </div>
                <img
                  className="absolute top-[0rem] left-[4.78rem] w-[5.16rem] h-[1.76rem] overflow-hidden"
                  alt=""
                  src="/logo-color-hrze9569ddee176b597ee1c6b57722999a7-12.svg"
                /> */}
              </div>
            </div>
            <div className="absolute top-[0rem] left-[11.89rem] bg-tertiary-blue-hydrangea-300 w-[0.05rem] h-[5.72rem]" />
          </div>
        </div>
        <div className="absolute top-[5.94rem] left-[11.09rem] w-[12.94rem] h-[1.81rem] text-[0.56rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[1.81rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-2xl [background:linear-gradient(263.58deg,_#1a56db,_rgba(26,_86,_219,_0.34))] w-[12.94rem] h-[1.81rem]" />
            <img
              className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[1.81rem]"
              alt=""
              src="/mask-group2.svg"
            />
            <div onClick={downloadPDF} className="absolute top-[0.42rem] left-[2.72rem] w-[9.06rem] h-[0.6rem]">
              <div className="absolute top-[0rem] left-[0rem] leading-[1rem] font-black inline-block w-[9.06rem] h-[0.6rem]">
                click to download the report pdf
              </div>
            </div>
            {/* <div>
              <button onClick={downloadPDF}> download pdf</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default A467;
