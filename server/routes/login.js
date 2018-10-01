import User from '../models/user'

import axios from 'axios'

const  getProfile = async (url) => {
	let data = {}
	let response = await axios.get(url)
	data.name = response.data.name
	data.email = response.data.email
	data.picture = response.data.picture
	return data
}

const isExist = async email => {
    const user = await User.findOne({ email })
    if (user) {
		return true
    }  
	return false
    
 }

export const login = async (ctx, next) => {
	var token = ctx.request.body.idToken
	var url = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+ token;
	var data = await getProfile(url)
	if(data.email){
		let i = await isExist(data.email)
		if(i){
			const email = data.email
			const user = await User.findOne({ email })
		}else{
			
			const user = new User({
					email:data.email,
					name: data.name
					})
			await user.save()
		}
	}else{
		ctx.body = 'Đăng nhập lỗi'
	}
	ctx.body = data 
}