actor {
  type Student = {
    regNo : Text;
    name : Text;
    instituteName : Text;
    instituteAddress : Text;
    course : Text;
    duration : Text;
  };

  let student : Student = {
    regNo = "1772013023";
    name = "Alice Scriptures";
    instituteName = "Institute of Blockchain Technology";
    instituteAddress = "35 Blockchain Road, Utopia";
    course = "Bachelor of Computer Science in Blockchain Tech";
    duration = "4 year";
  };

  public query ({ caller }) func getStudent() : async Student {
    student;
  };
};
