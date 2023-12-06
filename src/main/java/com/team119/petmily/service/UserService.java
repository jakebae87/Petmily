package com.team119.petmily.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.team119.petmily.domain.UserDTO;




public interface UserService {
	

	
	
	List<UserDTO> UserList(String id);

	// ** selectList
	List<UserDTO> selectList();

	// ** selectOne
	UserDTO selectOne(UserDTO dto);

	
	
	// ** insert
	int insert(UserDTO dto);

	// ** update
	int update(UserDTO dto);

	// ** delete
	int delete(UserDTO dto);
	//아이디 찾기
	 String foundUserId(String username, String useremail);
	 //비밀번호찾기
	String foundUserPw(String userid, String useremail);


}