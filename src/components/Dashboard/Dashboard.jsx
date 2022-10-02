import React, { useContext } from 'react'
import dataContext from '../../datacontext'
import './dashboard.css'
const Dashboard = () => {
  const {globalData,setGlobalData}=useContext(dataContext)
  const imageSelect = (Time) => {
    const date = new Date(Time);
    if (date < new Date('2020-09-28 13:42')) return 2;
    else if (date < new Date('2020-11-24 15:42')) return 5;
    else if (date < new Date('2021-03-11 15:26')) return 6;
    else if (date < new Date('2021-05-20 10:51')) return 7;
    else if (date < new Date('2021-11-23 11:35')) return 8;
    else if (date < new Date('2022-01-10 15:04')) return 9;
    else if (date < new Date('2022-04-06 12:36')) return 10;
    else if (date < new Date('2022-06-28 12:22')) return 11;
    else if (date < new Date('2022-09-13 13:51')) return 12;
    else return 1;
}

let urls = [
  [],
  ['PNGs_Orbit01_inner/20181101_004548_1suff.png', 'PNGs_Orbit01_inner/20181101_013048_1suff.png', 'PNGs_Orbit01_inner/20181101_021548_1suff.png'],
  ['PNGs_Orbit02_inner/20190330_123106_1suff.png', 'PNGs_Orbit02_inner/20190330_130052_1suff.png', 'PNGs_Orbit02_inner/20190330_133037_1suff.png'],
  [],
  [],
  ['PNGs_Orbit05_inner_Encounter/20200601_125524_1suff.png', 'PNGs_Orbit05_inner_Encounter/20200601_132023_1suff.png', 'PNGs_Orbit05_inner_Encounter/20200601_134523_1suff.png'],
  ['PNGs_Orbit06_inner/20200919_230019_1suff.png', 'PNGs_Orbit06_inner/20200919_233019_1suff.png', 'PNGs_Orbit06_inner/20200919_000019_1suff.png'],
  ['PNGs_Orbit07_inner/20210105_153027_1suff.png', 'PNGs_Orbit07_inner/20210105_160027_1suff.png', 'PNGs_Orbit07_inner/20210105_163027_1suff.png'],
  ['PNGs_Orbit08_inner/20210414_212532_1suff.png', 'PNGs_Orbit08_inner/20210414_215532_1suff.png', 'PNGs_Orbit08_inner/20210414_222532_1suff.png'],
  ['PNGs_Orbit09_inner/20210726_070037_1suff.png', 'PNGs_Orbit09_inner/20210726_080037_1suff.png', 'PNGs_Orbit09_inner/20210726_130037_1suff.png'],
  ['PNGs_Orbit10_inner/20211111_120226_1suff.png', 'PNGs_Orbit10_inner/20211111_130226_1suff.png', 'PNGs_Orbit10_inner/20211111_140226_1suff.png'],
  ['PNGs_Orbit11_inner/20220209_190543_1suff.png', 'PNGs_Orbit11_inner/20220209_200543_1suff.png', 'PNGs_Orbit11_inner/20220210_010542_1suff.png'],
  ['PNGs_Orbit12_inner/20220515_220051_1suff.png', 'PNGs_Orbit12_inner/20220516_070051_1suff.png', 'PNGs_Orbit12_inner/20220516_080051_1suff.png']
]
  const formattedTime= new Date(globalData.Time)
  const useTime=formattedTime.toLocaleDateString()+" "+formattedTime.toLocaleTimeString()
  const forgedB=globalData.B_is_NaN
  const forgedSpeed=globalData.Speed_is_NaN
  const ur=urls[imageSelect(globalData.Time)]
  console.log(ur);
  
  const takeImg="https://wispr.nrl.navy.mil/data/rel/pngs/"+ur[Math.floor(Math.random()*3)]
  console.log(takeImg);
    return (
    <div className='dashboard slide-left'>
      <div className="image">
        <img src={takeImg ? takeImg : "https://wispr.nrl.navy.mil/data/rel/pngs/PNGs_Orbit12_inner/20220515_220051_1suff.png"} alt="" />
      </div>
    <div className="detailgrid">
       B
      <div className="B">{forgedB ? <span>Data Not Available</span>: <span>{globalData.B}</span>}</div>
      Time
      <div className="Time">{useTime}</div>
      flowlon
      <div className="flowlon">{globalData.flowlon}</div>
      heliographicLatitude
      <div className="heliographicLatitude">{globalData.heliographicLatitude}</div>
      heliographicLongitude
      <div className="heliographicLongitude">{globalData.heliographicLongitude}</div>
      protonDensity
      <div className="protonDensity">{globalData.protonDensity}</div>
      protonSpeed
      <div className="protonSpeed">{forgedSpeed ? <span>Data Not Available</span>: <span>{globalData.protonSpeed}</span>}</div>
      protonTemp
      <div className="protonTemp">{globalData.protonTemp}</div>
      radialDistance
      <div className="radialDistance">{globalData.radialDistance}</div>

  
    </div>
    </div>
    
  )
}

export default Dashboard
