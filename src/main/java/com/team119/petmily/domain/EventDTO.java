package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
	private int EVENT_ID;
	private String EVENT_NAME;
	private String EVENT_DESCRIPTION;
	private LocalDateTime EVENT_START;
	private LocalDateTime EVENT_END;
	private String EVENT_IMAGEPATH;
}
