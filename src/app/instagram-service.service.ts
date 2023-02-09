import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InstagramServiceService {
  private access_token = "IGQVJWRmRLQlNUaVQ4dEttWW16b2czb1FVNTQwbkRWRXl5ZAmxHUW85TjV1Vl96amJ0Q2IzRGlLMXV6M0d4SnNjaUxPZAnRHQ2RkWUZAuQTk0ZA3dJX1JhOVd6TjB1bUZA2ZA0ZAUSFo1OWJ3";
 
  constructor(private http: HttpClient) { }
  getImages(limit: number) {
    return this.http.get("https://graph.instagram.com/me/media?fields=id,caption,thumbnail_url,media_type,media_url,timestamp,children{media_type,media_url,thumbnail_url}&access_token=" + this.access_token + "&limit=" + limit.toString());
  }
  /*getImageDetails(id: string) {
    return this.http.get("https://graph.instagram.com/" + id + "?fields=id,thumbnail_url,media_type,media_url,timestamp,children{media_type,media_url,thumbnail_url}&access_token=" + this.access_token);
  }*/
  getImagesDummy(){
    return of({"data":[{"id":"17889854621751050","caption":"9. Post","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/321171529_191762986767622_2170990773500604559_n.webp?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=irXk9zPNsyYAX-IaCvr&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBgxRzBacsNVOSXxuLQEHlNx73pYv1Twn7wN6Qp7bc4aA&oe=63E91B73","timestamp":"2022-12-22T09:46:32+0000"},{"id":"18023177188413958","caption":"Carousel mit video als lead","media_type":"CAROUSEL_ALBUM","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317643862_694672548741523_3327553901270798764_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=44W47F9Ll4IAX_wbgRK&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBw5mY5SXNLypV3yjOVV0pX5mcqmI7y0MfJ1dYbwiQBew&oe=63E9BFF8","timestamp":"2022-12-01T12:31:26+0000","children":{"data":[{"media_type":"VIDEO","media_url":"https://video.cdninstagram.com/v/t50.2886-16/313856299_546496030243990_7022051986231904024_n.mp4?_nc_cat=106&vs=852179765934332_1894373664&_nc_vs=HBksFQAYJEdDc1J0UktXLU1BRkNmRUJBQmpIcmJrVFYzTmhia1lMQUFBRhUAAsgBABUAGCRHT1dOOGhLZkNMb2pidzhEQUJQcVk5SDdzaFp3YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaQwd2Kjr37PxUCKAJDMywXQCeYk3S8an8YEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=ZSMPg7nXo1QAX9kU_ox&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDWXU-bz1P0Iw4DBSqIsNN_68Bri-9S9lPonrrl50b1_w&oe=63E55C05&_nc_rid=3dd14fd0e5","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317643862_694672548741523_3327553901270798764_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=44W47F9Ll4IAX_wbgRK&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBw5mY5SXNLypV3yjOVV0pX5mcqmI7y0MfJ1dYbwiQBew&oe=63E9BFF8","id":"18012939001452674"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317538223_519670153431838_4876460493912179409_n.webp?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=K47PVV05OI0AX8vAqsz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCiAxwgWhnclvM7trsgmithDDAPEp6UlndCzlAca3hRkA&oe=63E947C9","id":"17944660448413514"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317941845_1849874838678758_8123747174096971468_n.webp?stp=dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zvZf39mcty0AX9q5uTK&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB9HTMISiEal7WPBA5vnweGUFMRmRQSkrYItdG5nGZ_uQ&oe=63EA8AD0","id":"18001103698544860"}]}},{"id":"17885133755699287","caption":"Carousel mit videos","media_type":"CAROUSEL_ALBUM","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317816355_1589155408181527_378016363913510273_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=g1FPGg3QBA4AX-duZ9D&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAvps_8gove3Gp66YPXqDux9JnWFRGMRhCG4Uie7pc1nw&oe=63EACD18","timestamp":"2022-12-01T12:18:03+0000","children":{"data":[{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317816355_1589155408181527_378016363913510273_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=g1FPGg3QBA4AX-duZ9D&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAvps_8gove3Gp66YPXqDux9JnWFRGMRhCG4Uie7pc1nw&oe=63EACD18","id":"17938092755363194"},{"media_type":"VIDEO","media_url":"https://video.cdninstagram.com/v/t50.2886-16/313893756_669419504811729_6350137767342196279_n.mp4?_nc_cat=106&vs=544087860522594_3504351933&_nc_vs=HBkcFQAYJEdIeWp0UkxSUHNwZjFXQUNBRGRHT2Ftbk9DQllia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJozvhNvb499AFQIoAkMzLBdAEQAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB17gcA&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=xdtVqs-rjocAX-MC9p7&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAOG5HQGf6b8Bupt30tHrAj0NgjyX2LR0XoWp3QE3Ed1w&oe=63E56923&_nc_rid=5004e157f6","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317708717_182814987664559_4008309551406741691_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=HXatpmYyzbQAX8vs_D7&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCpvqBwVupbF6x-jQKbtqhybmPFGT2-_iR71MIE249Cig&oe=63EA7106","id":"17912635322586978"},{"media_type":"VIDEO","media_url":"https://video.cdninstagram.com/v/t50.2886-16/317868251_505335488245799_7654794817616697913_n.mp4?_nc_cat=110&vs=443543394648487_1939364536&_nc_vs=HBkcFQAYJEdOdEk4aEluOEVTV21jc0JBRGxhaTJ4VVN6dHFia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpKaodre5NFAFQIoAkMzLBdACmZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB17gcA&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=lx-FT6IIBjcAX_x876s&_nc_oc=AQnBgpK7M5x2-2OSaWVi1cltAZO0hIijri5DSX-m7uhyOUjuT7cMHNEu4WRUutTUZtPax1Gllryml3DEUkY_bZi8&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB1ka_oVN4BLMkK-p7A_rA_p18I_jqLIAjzTyE1mM_vbw&oe=63E57BFE&_nc_rid=720d8bebb5","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317559991_1198666217672497_5968830129206746830_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=HikIfrduOacAX9_MtO2&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAgZ_L58hQummJIivoWtSI3DPzHTVtDCvDOZXI-w5bM8Q&oe=63E8E798","id":"17986345516676967"}]}},{"id":"17965515107087293","caption":"Carousel test","media_type":"CAROUSEL_ALBUM","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317623385_1068516804547179_8815480139802723305_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_9N3KBb3AKYAX-ZbpFR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAivMruAXiUoEsW7Jt9zZIhRmhpKcX8YKVZFdcpCs8nAQ&oe=63E9358B","timestamp":"2022-12-01T11:46:54+0000","children":{"data":[{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317623385_1068516804547179_8815480139802723305_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_9N3KBb3AKYAX-ZbpFR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAivMruAXiUoEsW7Jt9zZIhRmhpKcX8YKVZFdcpCs8nAQ&oe=63E9358B","id":"17958965618175876"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317655415_434972775333854_2902318788521517093_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ApfZHK8XpAgAX-cBjPs&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA9ieIlcKgZ-X1FRGX1Zx-VTVlnOkSf0-c9voqHP9mHYQ&oe=63EAC0CC","id":"17948648939211003"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317382441_553101713322153_8748143342324204545_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=wYe60AEAu4UAX-UzWPE&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAU2Ld1ERd6GXCgTUGI1eTPPDbv-hOvYN_j53o9EUbqaw&oe=63EA9560","id":"18149257153286069"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317713509_452110647097753_5695678111928411848_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=hpLmOUn8PqMAX_axPFC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD77wGL6cTwBZRguJOU2ikQTgHbFN_5HqjO8ydum7eW0Q&oe=63EA30D5","id":"18194896333215627"}]}},{"id":"17945382047254899","caption":"Test video","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317446183_121841773883421_6835448870789353840_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=xBSzPZiQvZ4AX8AN5oa&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCuFkAY6I4vdOgwz6VuMyTRRFy0c0DE0Ca7mHTnJxQsrw&oe=63EA40E5","media_type":"VIDEO","media_url":"https://video.cdninstagram.com/o1/v/t16/f1/m82/D84D354EE5C1AC70EBAFD2F13911D384_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=109&vs=924680342273150_376961801&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EODREMzU0RUU1QzFBQzcwRUJBRkQyRjEzOTExRDM4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR04zRTdoSjFfb3h0V0Q0SEFCYzZrVHVudTlGMWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAm%2BoCE9v%2BO%2Bj8VAigCQzMsF0AduVgQYk3TGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&ccb=9-4&oh=00_AfDX145SxtGBZjzM8U5-XuPnYShW8bMfqgfv1tzOMhvvGA&oe=63E63FBC&_nc_sid=ea0b6e&_nc_rid=8ffd049567","timestamp":"2022-12-01T11:39:17+0000"},{"id":"18312205291074948","caption":"Puppy tiiime","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317372058_130727346478708_8907284219586106916_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=6Aa00cKUIDMAX8PDevS&_nc_oc=AQmmCGxDIKxbgfmNP1kBIQAxPncW9JQrFOV7dtgSnxDsL33xQ2CTGZQLI-EAay1WKPSWp4675hyzCFW_vsdvZhjc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDInM8OdAdwGFafOkinj5RGLZB2TknmT33Aq0rbwQxw2g&oe=63EACBBA","timestamp":"2022-11-30T20:14:34+0000"},{"id":"17934806828587522","caption":"3ter post gar kein problem","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317366467_691060649284931_3740263353688549361_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uyQijjpbW6sAX-aVayq&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDyPGsL36rlDGBCu4tbAoxMd1E7MoNIenjKwRgFcIKgCw&oe=63E98E68","timestamp":"2022-11-30T19:50:35+0000"},{"id":"17950704158154607","caption":"Mein zweiter post","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317611798_199437392691871_1971881428630387145_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=otmhhil-TYgAX-moRJ4&_nc_oc=AQkuXXgzujVyV6tDGkcAiEz-g-lnRXkDjkA5QTDVrnn9s2P8ZzSEImiw2TgCgFUOu1PdFxasfcC6KJB8TqyO8zUi&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC6255cWF5-RFoq4IuM77KeYIPk9rgE_5m1FzOhSIve2Q&oe=63EAC68F","timestamp":"2022-11-30T09:31:18+0000"},{"id":"17958657638179711","caption":"Mein erster post","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317485659_2428438177297458_3476922842052284262_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rjYQGSCQyMEAX_vSX5G&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCA6yo1AOZkio80FL7ABuDGJeFUGue1b-g1HzDVbhzXrQ&oe=63EAA56A","timestamp":"2022-11-30T09:30:34+0000"}],"paging":{"cursors":{"before":"QVFIUk10d3c2ZAHZAFSFJ2RnJ5eExzbGxRaW1UbFV6RWVHLWY2OXcyVVN2dmJjcGJUenIyZA2ZA2MVhYZAHFWOGV0VThCX2tnWGFmRzVUZAmRiYlZAKcWZApR3c4WXFB","after":"QVFIUjV3LURHZA0x5SGdpZAGRBaUxOZAmxNWG04c0FJaTJyaC1NcXNyS0JVY3BzXzNTRlNPeVB1aEc5cGg2MFBfa2x2RW9LX3IwQW0tSFh3WEdCajNQaFJiYmxB"}}});
  }
}
