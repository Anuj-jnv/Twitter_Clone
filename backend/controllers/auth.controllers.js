export const signup = async(req,res)=>{
    res.json({
        data:"you hit the signup endpoints"
    })
}

export const login= async(req,res)=>{
    res.json({
        data:"you hit the login endpoints"
      });
  }

export const logout= async(req,res)=>{
    res.json({
        data:"you hit the logout endpoints"
      });
}