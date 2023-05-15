// const endpoint="http://localhost/prepinstaprime/code/sprint1/admin/wp-json/wp/v2/";
const endpoint = 'https://prepinstaprime.com/admin/wp-json/wp/v2/';
//const endpoint="https://staging.prepinstaprime.com/admin/wp-json/wp/v2/";

export async function getCourseList(course) {
    const url = endpoint + 'getCourseList?course=' + course;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getStudentsReport(page, collegeid, queryString) {
    const response = await fetch(endpoint + 'getStudentsReport', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ page: page, collegeid: collegeid, queryString: queryString })
    });
    const data = await response.json();

    return data;
}

export async function csvExportCollegeStudent(collegeId, queryString) {
    const response = await fetch(endpoint + 'csvExportCollegeStudent', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/csv'
        },
        body: JSON.stringify({ collegeid: collegeId, queryString: queryString })
    });

    return response;
}

// export async function getDashboardDetails() {
//   const url=endpoint+"getDashboardDetails?college_id=1";
//   const response=await fetch(url);
//   const data= await response.json();
//   return data;
// }

export async function collegeLogin(userEmail, userPass) {
    const response = await fetch(endpoint + 'collegeLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userEmail: userEmail, userPass: userPass })
    });
    const data = await response.json();

    return data;
}

/*get options for filter option to college*/
export async function getFilterDetails(college_id) {
    const url = endpoint + 'getFilterDetails?college_id=' + college_id;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export async function getCollegeDashboard(collegeId, passoutYear) {
    // const url=endpoint+"getCollegeDashboard?collegeid="+collegeId;
    // const response=await fetch(url);
    // const data= await response.json();
    // return data;

    const response = await fetch(endpoint + 'getCollegeDashboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ collegeid: collegeId, passout_year: passoutYear })
    });
    const data = await response.json();

    return data;
}
