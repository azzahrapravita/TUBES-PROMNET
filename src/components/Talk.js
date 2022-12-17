import React from 'react'
import './Talk.css'

const Talk=()=>{
    return(  
		<div ClassName="box-wrapper">
		<div ClassName="info-wrap">
			<h2 ClassName="info-title">Lets Talk</h2>
			<h3 ClassName="info-sub-title">Ayo berbincang dengan mengikuti social media kami!</h3>
			<ul ClassName="info-details">
				<li>
					<i ClassName="fas fa-phone-alt"></i>
					<span>Phone:</span> <a href="tel:+ 1235 2355 98"> 082283140164</a>
				</li>
				<li>
					<i ClassName="fas fa-paper-plane"></i>
					<span>Email:</span> <a href="mailto:info@yoursite.com">Kel8@SearDucation.com</a>
				</li>
				<li>
					<i ClassName="fas fa-globe"></i>
					<span>Website:</span> <a href="#">SearDucation.com</a>
				</li>
			</ul>
			<ul ClassName="social-icons">
				<li><a href="#"><i ClassName="fab fa-facebook"></i></a></li>
				<li><a href="#"><i ClassName="fab fa-twitter"></i></a></li>
				<li><a href="#"><i ClassName="fab fa-linkedin-in"></i></a></li>
				<li><a href="#"><i ClassName="fab fa-instagram"></i></a></li>

			</ul>
		</div>
		<div ClassName="form-wrap">
			<form action="#" method="POST">
				<h2 ClassName="form-title">Kirim Pesan Untuk Kita</h2>
				<div ClassName="form-fields">
					<div ClassName="form-group">
						<input type="text" ClassName="fname" placeholder="Nama Lengkap"/>
					</div>
					<div ClassName="form-group">
						<input type="text" ClassName="lname" placeholder="Username"/>
					</div>
					<div ClassName="form-group">
						<input type="email" ClassName="email" placeholder="Email"/>
					</div>
					<div ClassName="form-group">
						<input type="number" ClassName="phone" placeholder="Phone"/>
					</div>
					<div ClassName="form-group">
						<textarea name="message" id="" placeholder="Tulis Pesan Mu"></textarea>
					</div>
				</div>
				<input type="submit" value="Kirim Pesan" ClassName="submit-button"/>
			</form>
		</div>
	</div>
    );
}

export default Talk;