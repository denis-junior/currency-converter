import jwt from 'jsonwebtoken'
import { config } from '../config/config';

const generateToken = (schemaModel: Object): String => {
    return jwt.sign({name: schemaModel.name})
}
