var testData = ["Saab", "Volvo", "BMW"];
var timetableLabel = ["08:00AM","09:00AM","10:00AM","11:00AM","12:00PM","01:00PM","02:00PM","03:00PM","04:00PM","05:00PM","06:00PM","07:00PM","08:00PM","09:00PM","10:00PM"];

var userData = {
					courseHistory:
					[
						{
							courseID: "cmpsci_1we3",
							grade: "A-",
							term: "Fall 2016",
							units: "3.0"
						},
						{
							courseID: "cmpsci_1jc3",
							grade: "B+",
							term: "Fall 2016",
							units: "3.0"
						},
						{
							courseID: "cmpsci_1zz3",
							grade: "A+",
							term: "Winter 2017",
							units: "3.0"
						},
						{
							courseID: "cmpsci_1qz3",
							grade: "C-",
							term: "Winter 2017",
							units: "3.0"
						},
						{
							courseID: "knigt_2ba3",
							grade: "A+",
							term: "Fall 2016",
							units: "3.0"
						},
						{
							courseID: "envir_1qp3",
							grade: "B",
							term: "Fall 2016",
							units: "3.0"
						},
						{
							courseID: "magic_3lv3",
							grade: "A",
							term: "Winter 2017",
							units: "3.0"
						},
					]

}



var selectedCourses = [


]

var courseData ={
					"cmpsci_1jc3":{
						subject: "CMPSCI",
						courseCode: "1JC3",
						courseName: "Introduction to Computational Thinking",
						courseDesc: "Inquiry into ideas and methods of computer science (CS), the science underlying our computational universe. Topics include what computers can and cannot do, the Internet and search engines, artificial intelligence, computer-controlled devices, and sustainability in computing.",
						term: "Fall 2017",
						coreTime: [
							"Tue Thurs Fri: 0830 - 0920"
						],
						tutTime: [
							"Wed: 1530 - 1620"
						],
						labTime: [],
						avail_seats: "100",
						status: "bad",
						conflict_status: "good"
					},
					"cmpsci_1qz3":{
						subject: "CMPSCI",
						courseCode: "1QZ3",
						courseName: "Introduction to Adding Numbers",
						courseDesc: "Inquiry into ideas and methods of adding numbers, the science of underlying addition. Topics include what numbers can and cannot do, the calculators and online tools, calculator intelligence, math-controlled devices, and sustainability in adding.",
						term: "Winter 2018",
						coreTime: [
							"Tue Thurs Fri: 0930 - 1020",
						],
						tutTime: [],
						labTime: [],
						avail_seats: "10",
						status: "bad",
						conflict_status: "good"
					},
					"cmpsci_1we3":{
						subject: "CMPSCI",
						courseCode: "1WE3",
						courseName: "Introduction to Subtracting Numbers",
						courseDesc: "Inquiry into ideas and methods of subtracting numbers, the science underlying subtraction. Topics include what numbers can and cannot do, the calculators and online tools, calculator intelligence, math-controlled devices, and sustainability in subtracting.",
						term: "Fall 2017",
						coreTime: [
							"Wed: 0930 - 1020 | Thurs: 1030 - 1220"
						],
						tutTime: [],
						labTime: ["Fri: 1130 - 1420"],
						avail_seats: "0",
						status: "bad",
						conflict_status: "good"
					},
					"cmpsci_1zz3":{
						subject: "CMPSCI",
						courseCode: "1ZZ3",
						courseName: "Introduction to Abstract Thinking",
						courseDesc: "Inquiry into ideas and methods of abstract thinking, the science underlying thinking. Topics include what thinking can and cannot do, the meaning of abstraction and online tools, thinking intelligence, abstractdevices, and sustainability in thinking.",
						term: "Winter 2018",
						coreTime: [
							"Mon Tue Wed: 1230 - 1320"
						],
						tutTime: [],
						labTime: ["Fri: 1130 - 1420"],
						avail_seats: "75",
						status: "bad",
						conflict_status: "good"
					},
					"econc_1b03":{
						subject: "ECONC",
						courseCode: "1B03",
						courseName: "Introduction to Microeconomics",
						courseDesc: "	An introduction to the method and theory of microeconomics, and their application to the analysis of contemporary economic problems.",
						term: "Winter 2018",
						coreTime: [
							"Mon Tue Wed: 1530 - 1620", "Tue: 1900 - 2200"
						],
						tutTime: [],
						labTime: [],
						avail_seats: "100",
						status: "good",
						conflict_status: "good"
					},
					"econc_1bb3":{
						subject: "ECONC",
						courseCode: "1BB3",
						courseName: "Introduction to Financial Markets",
						courseDesc: "	An introduction to the method and theory of macroeconomics, and their application to the analysis of contemporary economic problems.",
						term: "Fall 2017",
						coreTime: [
							"Mon Wed Fri: 1630 - 1720"
						],
						tutTime: [],
						labTime: [],
						avail_seats: "0",
						status: "bad",
						conflict_status: "good"
					},
					"acctg_1aa3":{
						subject: "ACCTG",
						courseCode: "1AA3",
						courseName: "Introduction to Black Markets",
						courseDesc: "This is an introduction to the basic principles and practices of financial accounting, which includes an examination of income measurement and asset and liability valuation, to provide an understanding of financial accounting information and the ethics of financial reporting.",
						term: "Winter 2018",
						coreTime: [
							"Mon: 1900 - 2200"
						],
						tutTime: [],
						labTime: [],
						avail_seats: "0",
						status: "bad",
						conflict_status: "good"
					},
					"envir_1qp3":{
						subject: "ENVIR",
						courseCode: "1QP3",
						courseName: "Introduction to Magic Rocks",
						courseDesc: "An introduction to the physical, chemical and biological properties of magical rocks. Application to environmental and land-use impacts.",
						term: "Fall 2017",
						coreTime: [
							"Tue Thurs Fri: 1430 - 1520"
						],
						tutTime: [],
						labTime: ["Mon: 1230 - 1420", "Tue: 1230 - 1420", "Wed: 1430 - 1620"],
						avail_seats: "10",
						status: "bad",
						conflict_status: "good"
					},
					"envir_1qq3":{
						subject: "ENVIR",
						courseCode: "1QQ3",
						courseName: "Introduction to Sulfur Poisoning",
						courseDesc: "An introduction to the physical, chemical and biological properties of sulpher. Application to environmental and land-use impacts.",
						term: "Winter 2018",
						coreTime: [
							"Mon Wed Fri: 1030 - 1120", "Wed Thurs Fri: 0830 - 0920"
						],
						tutTime: [],
						labTime: [],
						avail_seats: "40",
						status: "good",
						conflict_status: "good"
					},
					"maths_1em3":{
						subject: "MATHS",
						courseCode: "1EM3",
						courseName: "Introduction to Calculus",
						courseDesc: "Functions: limits, continuity, derivatives, optimization, curve sketching. Anti-derivative, definite integral, techniques of integration, with applications.",
						term: "Winter 2018",
						coreTime: [
							"Mon Wed Fri: 1030 - 1120"
						],
						tutTime: ["Wed: 1630 - 1720", "Thurs: 1630 - 1720", "Fri: 1630 - 1720"],
						labTime: [],
						avail_seats: "2",
						status: "good",
						conflict_status: "good"
					},
					"mecht_4xb3":{
						subject: "MECHT",
						courseCode: "4XB3",
						courseName: "Advanced Lego Physics",
						courseDesc: "Interfacing to digital and analog lego systems, sensors and actuators. Signals and conditioning: lego acquisition, active and passive lego filtering, optical and analog lego isolation, PWM, de/ multiplexing. Architecture of lego micro-controllers and DSP. Embedded lego system design and documentation.",
						term: "Fall 2017",
						coreTime: [
							"Tue Thurs Fri: 0830 - 0920"
						],
						tutTime: [],
						labTime: ["Mon: 0830-1020", "Tue: 0830-1020"],
						avail_seats: "50",
						status: "good",
						conflict_status: "good"
					},
					"magic_4rf3":{
						subject: "MAGIC",
						courseCode: "4RF3",
						courseName: "Advanced Dark Arts",
						courseDesc: "An advanced course to the properties of the dark arts. Covers physical, chemical, biological, and third-dimension spell casting techniques with application.",
						term: "Fall 2017",
						coreTime: [
							"Mon Wed Thurs: 1730 - 1820", "Tue Thurs Fri: 0830 - 0920"
						],
						tutTime: [],
						labTime: ["Tue: 1230 - 1420"],
						avail_seats: "43",
						status: "good",
						conflict_status: "good"
					},
					"magic_3lv3":{
						subject: "MAGIC",
						courseCode: "3LV3",
						courseName: "Persistent Levitation Magic",
						courseDesc: "Specialized course to the founding of levitation magic and the different associated spell casting techniques used to perform ob objects. Please bring your wand on the first day of class!",
						term: "Winter 2018",
						coreTime: [
							"Tue Wed Fri: 1130 - 1220"
						],
						tutTime: ["Tue: 1430 - 1520"],
						labTime: [],
						avail_seats: "20",
						status: "bad",
						conflict_status: "good"
					},
					"knigt_2ba3":{
						subject: "KNIGT",
						courseCode: "2BA3",
						courseName: "Intermediate Knight Training",
						courseDesc: "Second-level Knight training. Includes theoretical principles of the medieval times and requires students to bring their own armour.",
						term: "Fall 2017",
						coreTime: [
							"Tue Thurs Fri: 0930 - 1020"
						],
						tutTime: ["Fri: 1430 - 1520"],
						labTime: [],
						avail_seats: "30",
						status: "bad",
						conflict_status: "good"
					},
					"drgon_4rs3":{
						subject: "DRGON",
						courseCode: "4RS3",
						courseName: "How to Train your Dragon",
						courseDesc: "Please purchase your dragon from the local bookstore prior to enrolling in the course. Includes basic training techniques to conquer your dragon, and possibly the kingdom.",
						term: "Fall 2017",
						coreTime: [
							"Mon Wed Thurs: 1430 - 1520"
						],
						tutTime: ["Fri: 1430 - 1520"],
						labTime: [],
						avail_seats: "10",
						status: "good",
						conflict_status: "good"
					},
					"drgon_3vx3":{
						subject: "DRGON",
						courseCode: "3VX3",
						courseName: "Dragon Anatomy",
						courseDesc: "A course to teach the fundamental similarities and differences between dragon anatomy and similar species. Students should not be squeamish and will be required to participate in a dragon dissection.",
						term: "Fall 2017",
						coreTime: [
							"Tue Wed Fri: 1030 - 1120"
						],
						tutTime: [],
						labTime: ["Wed: 1230 - 1420"],
						avail_seats: "10",
						status: "good",
						conflict_status: "good"
					},
					"magic_2bb3":{
						subject: "MAGIC",
						courseCode: "2BB3",
						courseName: "Introduction to Spell Theory and Composition",
						courseDesc: "An introductory course that goes over the fundamentals of spell crafting and composition.",
						term: "Fall 2017",
						coreTime: [
							"Mon Tue Thurs: 1130 - 1220"
						],
						tutTime: [],
						labTime: [],
						avail_seats: "4",
						status: "good",
						conflict_status: "good"
					},
					"knigt_1zx3":{
						subject: "KNIGT",
						courseCode: "1ZX3",
						courseName: "Introduction to Knight Chivalry",
						courseDesc: "An introduction to the chivalric code. The code of conduct to which we knights live and die by.",
						term: "Winter 2018",
						coreTime: [
							"Mon Tue Thurs: 1230 - 1320"
						],
						tutTime: [],
						labTime: [],
						avail_seats: "32",
						status: "good",
						conflict_status: "good"
					},"knigt_2zc3":{
						subject: "KNIGT",
						courseCode: "2ZC3",
						courseName: "Introduction to Weapons of War",
						courseDesc: "An introduction to the most high tech and advance weaponry available at a knight's disposal. Covers topics such as the trebuchet and battering ram.",
						term: "Winter 2018",
						coreTime: [
							"Wed Thurs Fri: 1330 - 1420"
						],
						tutTime: ["Fri: 0930 - 1020"],
						labTime: [],
						avail_seats: "17",
						status: "good",
						conflict_status: "good"
					}

				}

function pushSelectedCourse (subject, course_code, term, core, tutorial, lab) {
	alert ("hi");
	selectedCourses.push({'test': {'subject': subject, 'courseCode': course_code, 'term': term, 'core': core, 'tutorial': tutorial, 'lab': lab }});
	alert ("hey");
}
