package com.teamjava.auth;

import java.awt.List;
import java.util.ArrayList;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/values")

public class ValuesController {
	  @GetMapping()
	  public ResponseEntity<ArrayList<String>> getNames() {
	    ArrayList<String> names = new ArrayList<String>();
	    names.add("Howl's moving castle");
	    names.add("Ponyo");
	    names.add("Spirited Away");
	    names.add("Proko Roso");
	    return ResponseEntity.ok(names);
	  }
}
