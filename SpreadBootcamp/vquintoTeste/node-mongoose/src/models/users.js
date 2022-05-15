import Mongoose from 'mongoose'

const validateEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

const schema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: [validateEmail, 'Please enter a valid email'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
}, {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false,
})

const UsersModel = Mongoose.model('Users', schema)

export default UsersModel