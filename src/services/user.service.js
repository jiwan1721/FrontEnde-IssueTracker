import api from './api'
class UserService {
    getUserInfo(){
        return api.get('/user/');
    }
    getUserAssignedIssue(){
        return api.get('/assigned-issues/');
    }
    getUserSpecificIssue(){
        return api.get('/user-specific-issue/')
    }
    getAdminUser(){
        return api.get('/user-specific-issue/')
    }
}
export default new UserService();