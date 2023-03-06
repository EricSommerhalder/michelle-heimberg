import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InstagramServiceService {
  private access_token = "";
 
  constructor(private http: HttpClient) { }
  getImages(limit: number) {
    return this.http.get("https://graph.instagram.com/me/media?fields=id,caption,thumbnail_url,media_type,media_url,timestamp,children{media_type,media_url,thumbnail_url}&access_token=" + this.access_token + "&limit=" + limit.toString());
  }
  /*getImageDetails(id: string) {
    return this.http.get("https://graph.instagram.com/" + id + "?fields=id,thumbnail_url,media_type,media_url,timestamp,children{media_type,media_url,thumbnail_url}&access_token=" + this.access_token);
  }*/
  
  getImagesDummy(){
    return of({"data":[{"id":"17889854621751050","caption":"9. Post","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/321171529_191762986767622_2170990773500604559_n.webp?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=bM_Wwk_LaNEAX8pjbgC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAVGVDzoO9OJ0MLqEQc_zAtTqsfV85G89tWCFAemXxR-Q&oe=640AB9B3","timestamp":"2022-12-22T09:46:32+0000"},{"id":"18023177188413958","caption":"Carousel mit video als lead","media_type":"CAROUSEL_ALBUM","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317643862_694672548741523_3327553901270798764_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_MWYcq85LdcAX9wKEUp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC_Fm8e2XqVkGf5q1M7Vq49AeOXFKFSw9_SqsVPAJNg0w&oe=640B5E38","timestamp":"2022-12-01T12:31:26+0000","children":{"data":[{"media_type":"VIDEO","media_url":"https://video.cdninstagram.com/v/t50.2886-16/313856299_546496030243990_7022051986231904024_n.mp4?_nc_cat=106&vs=852179765934332_1894373664&_nc_vs=HBksFQAYJEdDc1J0UktXLU1BRkNmRUJBQmpIcmJrVFYzTmhia1lMQUFBRhUAAsgBABUAGCRHT1dOOGhLZkNMb2pidzhEQUJQcVk5SDdzaFp3YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaQwd2Kjr37PxUCKAJDMywXQCeYk3S8an8YEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=zLArltSJrfsAX93BZUT&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfALDpwyeHGES0efQkVjoGvAPHy1cITCN1RroIwa5fMn6g&oe=640689C5&_nc_rid=31572ad7c1","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317643862_694672548741523_3327553901270798764_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_MWYcq85LdcAX9wKEUp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC_Fm8e2XqVkGf5q1M7Vq49AeOXFKFSw9_SqsVPAJNg0w&oe=640B5E38","id":"18012939001452674"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317538223_519670153431838_4876460493912179409_n.webp?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=b3sYZx0ssgAAX_gnjgc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAgQZCnc5gdIFifd84LxeF61VfQiPHilAA_wGzaTUjTDA&oe=640AE609","id":"17944660448413514"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317941845_1849874838678758_8123747174096971468_n.webp?stp=dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=N-wITutDIZUAX-tcgUv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAihSrJaU9LTSmUs24TUr6xYflpNLPWKE1FD-mWGrf-yw&oe=640A2ED0","id":"18001103698544860"}]}},{"id":"17885133755699287","caption":"Carousel mit videos","media_type":"CAROUSEL_ALBUM","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317816355_1589155408181527_378016363913510273_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CJZ-bGFb4CMAX9fCgvD&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDSAla40hQeOu7qKFkecGlrDVxOL59hRBYcqrN3_FF5OQ&oe=640A7118","timestamp":"2022-12-01T12:18:03+0000","children":{"data":[{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317816355_1589155408181527_378016363913510273_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CJZ-bGFb4CMAX9fCgvD&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDSAla40hQeOu7qKFkecGlrDVxOL59hRBYcqrN3_FF5OQ&oe=640A7118","id":"17938092755363194"},{"media_type":"VIDEO","media_url":"https://video.cdninstagram.com/v/t50.2886-16/313893756_669419504811729_6350137767342196279_n.mp4?_nc_cat=106&vs=544087860522594_3504351933&_nc_vs=HBkcFQAYJEdIeWp0UkxSUHNwZjFXQUNBRGRHT2Ftbk9DQllia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJozvhNvb499AFQIoAkMzLBdAEQAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB17gcA&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=ZzU2--AV0HMAX925Wtv&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCgygTn-04oup6UzbIS4lXHMCYx3ThuLmxm7hCqQMXTLg&oe=640696E3&_nc_rid=fb9db4d97a","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317708717_182814987664559_4008309551406741691_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=L2_LE-0ewuoAX9wEG-K&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC-4rQmiTue5EnSiZpfjDCuwFC_CC4TDqv6qp9aVtIiUA&oe=640A1506","id":"17912635322586978"},{"media_type":"VIDEO","media_url":"https://video.cdninstagram.com/v/t50.2886-16/317868251_505335488245799_7654794817616697913_n.mp4?_nc_cat=110&vs=443543394648487_1939364536&_nc_vs=HBkcFQAYJEdOdEk4aEluOEVTV21jc0JBRGxhaTJ4VVN6dHFia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpKaodre5NFAFQIoAkMzLBdACmZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB17gcA&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5jYXJvdXNlbF9pdGVtIn0%3D&_nc_ohc=3H_doD5LurQAX-TUrLQ&_nc_oc=AQma_lHBbt-dN1p3PM-GkSCp9sDAHilgVoSuiUpWofbV7xse6ANo-QR4zjHtxVElagA&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCtw1eGrM6mdw4473nwMTDYo7uQqslnswqyVkbzFSmgFQ&oe=6406A9BE&_nc_rid=df98a71b57","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317559991_1198666217672497_5968830129206746830_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=WJ1McGX-JC0AX-0hKlC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA2RlFASUDZgp2NjF5W_nn8xqeKKRI5MDbfaduYHYjskA&oe=640A85D8","id":"17986345516676967"}]}},{"id":"17965515107087293","caption":"Carousel test","media_type":"CAROUSEL_ALBUM","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317623385_1068516804547179_8815480139802723305_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Rq0KR5rMcMYAX_tfHlR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDYTEi0aqBwB-o-aS8eG8m7RKgG_xFzXucnnI2P3HXKWw&oe=640AD3CB","timestamp":"2022-12-01T11:46:54+0000","children":{"data":[{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317623385_1068516804547179_8815480139802723305_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Rq0KR5rMcMYAX_tfHlR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDYTEi0aqBwB-o-aS8eG8m7RKgG_xFzXucnnI2P3HXKWw&oe=640AD3CB","id":"17958965618175876"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317655415_434972775333854_2902318788521517093_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=tIAtB9cRP9EAX-lX0Yn&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCUOlM1LELUAYN9wXorwzdCvYBccFnbeoVyNei4Okjzhw&oe=640A64CC","id":"17948648939211003"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317382441_553101713322153_8748143342324204545_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fCOgSPxA7ZIAX8T6QbR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCbKcQo3wx9giAdPk_iOCc87B1Z9Do1Ys9ThsYKuc8r3A&oe=640A3960","id":"18149257153286069"},{"media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317713509_452110647097753_5695678111928411848_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UfLyRV2HdUwAX8wsA3T&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDiJpfoVExAv5Aezm8R7rPY213AKLRb1HQrs0mIQhBnFg&oe=640BCF15","id":"18194896333215627"}]}},{"id":"17945382047254899","caption":"Test video","thumbnail_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317446183_121841773883421_6835448870789353840_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8rNXOud1lS4AX839jkj&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfClKQb0rC5xx3_n6_0wXLWhCx1rHwFi3Qx1VccBY4m7wA&oe=640BDF25","media_type":"VIDEO","media_url":"https://video.cdninstagram.com/o1/v/t16/f1/m82/D84D354EE5C1AC70EBAFD2F13911D384_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video.cdninstagram.com&_nc_cat=109&vs=924680342273150_376961801&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EODREMzU0RUU1QzFBQzcwRUJBRkQyRjEzOTExRDM4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR04zRTdoSjFfb3h0V0Q0SEFCYzZrVHVudTlGMWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAm%2BoCE9v%2BO%2Bj8VAigCQzMsF0AduVgQYk3TGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&ccb=9-4&oh=00_AfD6WwaSf6Gxk51LLQCSE-Yz0KmQVFaOH0JkIDVd5nJioQ&oe=6407DDFC&_nc_sid=ea0b6e&_nc_rid=96ba3cc5cb","timestamp":"2022-12-01T11:39:17+0000"},{"id":"18312205291074948","caption":"Puppy tiiime","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317372058_130727346478708_8907284219586106916_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=aHQeaQD1-vIAX_eHK-6&_nc_oc=AQncACLJJWvPNz1HHwPpLYE7wkGfPTwMk9TNuOmrU6VCHQGS4GQGnruNcFjpib72TG4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDje_-GbUh_UpGaNRjjxtTWLL0B9MjY5455bGWBSdMChg&oe=640A6FBA","timestamp":"2022-11-30T20:14:34+0000"},{"id":"17934806828587522","caption":"3ter post gar kein problem","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317366467_691060649284931_3740263353688549361_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=R2C2hbKF3tsAX8ZgId7&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCKKSvsbnispmJrtIGhmJH6dH6A_K3pyC4-xWwBn1tfKA&oe=640B2CA8","timestamp":"2022-11-30T19:50:35+0000"},{"id":"17950704158154607","caption":"Mein zweiter post","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317611798_199437392691871_1971881428630387145_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4w0sSDSviOIAX8VYLZu&_nc_oc=AQlE_KiPLkMhNHGZscZjDOEwLcwiwFf4I0xJwpI1w8sJqZwmFWVTUPM1x8NB6NTomzM&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBjbrK1kgLyLAXjVH6YLSQgXzKBJs6G1lZJKFU33M0okw&oe=640A6A8F","timestamp":"2022-11-30T09:31:18+0000"},{"id":"17958657638179711","caption":"Mein erster post","media_type":"IMAGE","media_url":"https://scontent.cdninstagram.com/v/t51.29350-15/317485659_2428438177297458_3476922842052284262_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=mMujOx2-z0oAX_QBlV2&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA2XGi41WY6myVWwVla87rzhuDSpKMgGXpaiZaYNRqU9A&oe=640A496A","timestamp":"2022-11-30T09:30:34+0000"}],"paging":{"cursors":{"before":"QVFIUk10d3c2ZAHZAFSFJ2RnJ5eExzbGxRaW1UbFV6RWVHLWY2OXcyVVN2dmJjcGJUenIyZA2ZA2MVhYZAHFWOGV0VThCX2tnWGFmRzVUZAmRiYlZAKcWZApR3c4WXFB","after":"QVFIUjV3LURHZA0x5SGdpZAGRBaUxOZAmxNWG04c0FJaTJyaC1NcXNyS0JVY3BzXzNTRlNPeVB1aEc5cGg2MFBfa2x2RW9LX3IwQW0tSFh3WEdCajNQaFJiYmxB"}}});
  }
}
