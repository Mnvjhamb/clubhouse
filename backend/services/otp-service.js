const crypto = require('crypto');
const hashService = require('./hash-service');

const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;

const twilio = require('twilio')(smsSid, smsAuthToken, {
	lazyLoading: true
});

class OtpService {
	async generateOtp() {
		const otp = await crypto.randomInt(1000, 9999);
		return otp;
	}

	async sendBySms(phone, otp) {
		const res = {};
		try {
			res = await twilio.messages.create({
				to: phone,
				from: process.env.SMS_FROM_NUMBER,
				body: `Your clubhouse OTP is ${otp}`
			});

			return res;
		} catch (e) {
			return e;
		}
	}

	async verifyOtp(hashedOtp, data) {
		const hash = await hashService.hashOtp(data);
		return hash === hashedOtp;
	}
}

module.exports = new OtpService();
