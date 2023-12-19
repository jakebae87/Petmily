package com.team119.petmily.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@Controller
@RequestMapping("/oauth")
public class OAuthController {

    private Object userName;
	private Object userId;

	@PostMapping("/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestParam("code") String code) {
    	// 받은 코드로 액세스 토큰을 요청하는 메서드 호출
    	String accessToken = getAccessToken(code);

    	if (accessToken != null) {
    	    // 액세스 토큰을 사용하여 사용자 정보 요청
    	    ResponseEntity<String> userInfoResponse = getUserInfo(accessToken);

    	    if (userInfoResponse.getStatusCode().is2xxSuccessful()) {
    	        // 사용자 정보를 성공적으로 가져온 경우
    	        String userInfo = userInfoResponse.getBody();

    	        // 여기에 사용자 정보를 처리하는 로직을 추가하세요

    	        // 로그인이 성공하면 성공 응답 반환
    	        return ResponseEntity.ok("Kakao login successful!");
    	    } else {
    	        // 사용자 정보를 가져오지 못한 경우
    	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    	                .body("Failed to fetch user information from Kakao");
    	    }
    	} else {
    	    // 액세스 토큰을 가져오지 못한 경우
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    	            .body("Failed to get access token from Kakao");
    	}
    }
	private ResponseEntity<String> getUserInfo(String accessToken) {
	    String userInfoUrl = "https://kapi.kakao.com/v2/user/me";
	    HttpHeaders headers = new HttpHeaders();
	    headers.set("Authorization", "Bearer " + accessToken);
	    HttpEntity<?> entity = new HttpEntity<>(headers);

	    RestTemplate restTemplate = new RestTemplate();
	    ResponseEntity<String> userInfoResponse = restTemplate.exchange(
	            userInfoUrl,
	            HttpMethod.GET,
	            entity,
	            String.class
	    );

	    return userInfoResponse;
	}
    private String getAccessToken(String authorizationCode) {
        String tokenRequestUrl = "https://kauth.kakao.com/oauth/token";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(org.springframework.http.MediaType.APPLICATION_ATOM_XML);

        // 파라미터 설정
        String requestBody = "grant_type=authorization_code" +
                "&client_id=" + "36c72e69dcc46636ff1acefe07171573" +
                "&code=" + authorizationCode;

        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(
                tokenRequestUrl,
                HttpMethod.POST,
                requestEntity,
                String.class
        );

        // 응답에서 액세스 토큰 추출
        return extractAccessTokenFromResponse(response.getBody());
    }

    // 응답에서 액세스 토큰을 추출하는 메서드
    private String extractAccessTokenFromResponse(String responseBody) {
        return "extracted_access_token";
    }

    private void saveUserInfoInSession(String accessToken, HttpServletRequest request) {
        // 사용자 정보 요청 URL
        String userInfoUrl = "https://kapi.kakao.com/v2/user/me";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);
        HttpEntity<?> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> userInfoResponse = restTemplate.exchange(
                userInfoUrl,
                HttpMethod.GET,
                entity,
                String.class
        );

        if (userInfoResponse.getStatusCode().is2xxSuccessful()) {
            // 사용자 정보를 성공적으로 가져온 경우
            String userInfo = userInfoResponse.getBody();

            // 여기에서 사용자 정보를 JSON 파싱하여 필요한 정보만 세션에 저장할 수 있습니다.
            JSONObject jsonObject = new JSONObject(userInfo);

            // 예를 들어, 사용자의 ID와 이름을 세션에 저장하는 경우
            String userId = jsonObject.getString("id");
            String userName = jsonObject.getJSONObject("properties").getString("nickname");

            HttpSession session = request.getSession();
            session.setAttribute("userId", userId);
            session.setAttribute("userName", userName);
        }
    }
}