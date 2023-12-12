package com.team119.petmily.mapperInterface;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;





import com.team119.petmily.domain.UserDTO;

public interface UserMapper {
   
   
   
   List<UserDTO> UserList(String id);

   //1. selectList
   List<UserDTO> selectList();

   //2. selectOne: Detail
   UserDTO selectOne(UserDTO vo);
   
   //3. insert: Join
   int insert(UserDTO vo);

   //4. update
   // => id (P.Key) 제외한 모든 컬럼수정
   int update(UserDTO vo);
   
   int pwupdate(UserDTO vo);

   //5. delete
   int delete(UserDTO vo);
      //아이디찾기
    String findIdByNameAndEmail(@Param("user_name") String username, @Param("user_email") String useremail);
   //비밀번호찾기
    String findpwByIdAndEmail(@Param("user_id") String userid, @Param("user_email") String useremail);
    //아이디중복확인
    int checkUserId(String user_id);
    //비밀번호 확인
    String checkUserPw(@Param("user_id")String user_id);
    //임시비밀번호
    boolean randompw(@Param("userId") String userId, @Param("temporaryPassword") String temporaryPassword);

}