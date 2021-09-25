import jwt from 'jsonwebtoken'

const jwtMiddleware = async (ctx, next) => {
    const token = ctx.cookies.get('access-token')
    if(!token) return next()//토큰 없음
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        ctx.state.user = {
            _id: decoded._id,
            username: decoded.username
        }
        //토큰의 남은 유효 기간이 3.5일 미만이면 재발급
        const now = Math.floor(Date.now() / 1000)
        console.log('now:', now)
        if(decoded.exp - now < 60 * 60 * 24 * 3.5){
            const user = await User.findById(decoded._id)
            const token = user.generateToken()
            ctx.cookies.set('access-token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true
            })
        }
        console.log(decoded)
        return next()
    }catch(e){
        return next()
    }
}
export default jwtMiddleware