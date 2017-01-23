import $ from 'jquery';


$(document).ready(function(){

                var pic1 = $(".image1").attr('src');


                $(".image1").hover(function() {
                    $(this).attr("src","photos/jumperwet.jpg");
                        }, function() {
                    $(this).attr("src", pic1);
                });
            });
