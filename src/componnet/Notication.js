import React , {useState}from 'react'
import { Image } from 'react-bootstrap'
import './notication.css'


function Notication() {
	const [down, setDown] = useState(false);

	const toggleNotifi = () => {
	  if (down) {
		setDown(false);
	  } else {
		setDown(true);
	  }
	};
  
  return (
	<>
	<div class="icon"  onClick={toggleNotifi}>
			<Image src="img/bell.png" alt="" /> <span>17</span>
		</div>
    <div class="notifi-box" id="box" style={{ height: down ? "610px" : "0px", opacity: down ? 1 : 0 }} >
			<h2>แจ้งเตือน <span>17</span> <p className='p'>ลบทั้งหมด</p></h2>
			<div class="notifi-item">
				<Image src="img/avatar1.png" alt="img" />
				<div class="text">
				   <h4>ยาพารา เหลือ 2 ชิ้น</h4>
				   <p>12/04/2022</p>
			    </div> 
			</div>

			<div class="notifi-item">
				<Image src="img/avatar2.png" alt="img" />
				<div class="text">
				   <h4>ยาพารา ใกล้หมดอายุ</h4>
				   <p>12/04/2022</p>
			    </div> 
			</div>

			<div class="notifi-item">
				<Image src="img/avatar3.png" alt="img" />
				<div class="text">
				<h4>ยาพารา เหลือ 2 ชิ้น</h4>
				   <p>12/04/2022</p>
			    </div> 
			</div>

			<div class="notifi-item">
				<Image src="img/avatar4.png" alt="img" />
				<div class="text">
				<h4>ยาพารา เหลือ 2 ชิ้น</h4>
				   <p>12/04/2022</p>
			    </div> 
			</div>

			<div class="notifi-item">
				<Image  src="img/avatar5.png" alt="img" />
				<div class="text">
				<h4>ยาพารา เหลือ 2 ชิ้น</h4>
				   <p>12/04/2022</p>
			    </div> 
			</div>
			
		</div></>
  )
}

export default Notication