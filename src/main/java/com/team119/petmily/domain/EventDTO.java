package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
	private int event_id;
	private String event_name;
	private String event_description;
	private LocalDateTime event_start;
	private LocalDateTime event_end;
	private String event_imagepath;
}
