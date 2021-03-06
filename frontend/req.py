import requests, json

'''

generic request parsing
dean allen
march 31, 2021

type: 'POST' or 'GET'
endpoint: '' ('logins')
data: optional '' if post
id: optional '' if get # used for getting userId or many other things
'''
def req(type, endpoint, data="", id=""):
    # 
    if type == "post":
        resp = requests.post("http://127.0.0.1:5000/" + endpoint, json=data)


        if resp.status_code == 200:
            return json.loads(resp.text)
        else:
            print("error:", resp.status_code, resp.reason)
            return False
    else:
        if id != "":
            url = "http://127.0.0.1:5000/" + endpoint + "/" + str(id)
            resp = requests.get(url)
        else:
            url = "http://127.0.0.1:5000/" + endpoint
            resp = requests.get(url)


        if resp.status_code == 200:
            return json.loads(resp.text)

        else:
            print("error:", resp.status_code, resp.reason)
            return False
