class UserDto{
    _id;
    phone;
    name;
    profile;
    activated;
    createdAt;

    constructor(user){
        this.id = user._id;
        this.phone = user.phone;
        this.activated = user.activated;
        this.createdAt = user.createdAt;
        this.name = user.name;
        this.profile = user.profile ?  `${user.profile}` : null;
    }

}

module.exports = UserDto;