import request from '@/utils/request';

/**
 * @description   登陆
 * @author Limuen
 * @date 2021-04-07
 */
interface LoginPropsType {
  username: string | number;
  password: string | number;
  realmId: string;
}
export function Login(data: LoginPropsType) {
  return request({
    url: '/qx-oauth2-api/oauth2/login',
    method: 'post',
    data,
  });
}


