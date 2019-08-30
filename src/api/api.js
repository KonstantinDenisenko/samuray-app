import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "26ba7939-4655-4c06-9e58-2b68d05ae648"}
});

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followDelete (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    followPost (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getProfile (userId) {
        console.warn("Obsolete method. Pleace profileAPI abject.");
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${!userId ? 1396 : userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => {
                return response.data
            });
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
        .then(response => {
                return response.data
            });
    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
};


