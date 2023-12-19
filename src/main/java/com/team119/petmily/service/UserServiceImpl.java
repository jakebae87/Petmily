package com.team119.petmily.service;

import java.security.SecureRandom;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.message.SimpleMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.UserDTO;

import com.team119.petmily.mapperInterface.UserMapper;


@Service
public class UserServiceImpl implements UserService {
	
	// ** 전역변수 정의
	@Autowired
	UserMapper mapper;
	

	
	@Override
	public List<UserDTO> UserList(String id) {
		return mapper.UserList(id);
	}
	
	// ** selectList
	@Override
	public List<UserDTO> selectList() {
		return mapper.selectList();
	}
	// ** selectOne
	@Override
	public UserDTO selectOne(UserDTO dto) {
		return mapper.selectOne(dto);
	}
	

	// ** insert
	@Override
	public int insert(UserDTO dto) {
		return mapper.insert(dto);
	}
	// ** update
	@Override
	public int update(UserDTO dto) {
		return mapper.update(dto);
	}
	//pwupdate
	@Override
	public int pwupdate(UserDTO dto) {
		return mapper.pwupdate(dto);
	}
	// ** delete
	@Override
	public int delete(UserDTO dto) {
		return mapper.delete(dto);
	}
	@Override
    public String foundUserId(String username, String useremail) {
        return mapper.findIdByNameAndEmail(username, useremail);
    }
	@Override
    public String foundUserPw(String userid, String useremail) {
        return mapper.findpwByIdAndEmail(userid, useremail);
    }

//	public boolean updateUserPassword(String userid, String temporaryPassword) {
//		return mapper.randompw(userid, temporaryPassword);
//	}
	@Override
	public boolean randompw(String userId, String temporaryPassword) {
		return mapper.randompw(userId, temporaryPassword);
	}

	@Override
	public boolean updateUserPassword(String userid, String temporaryPassword) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public UserDTO kakaoLogin(String code) {
		return mapper.kakaoLogin(code);
	}
	
} //class
