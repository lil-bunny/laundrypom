valueDetails.order_products?.map((values, key) => {
          servercount+=values.product_quantity;
        });

      }

    });
    return servercount;
  }

  export function lsServedCount(orderDetails){
    let servercount=0;
    orderDetails?.map((valueDetails, keyOrder) => {
      if(valueDetails.db_id!==valueDetails.ls_id){

        valueDetails.order_products?.map((values, key) => {
          servercount+=values.product_quantity;
        });

      }

    });
    return servercount;
  }


  export function backButtonClass(rout_path){
    let rought_location_Json={
      "/dashboard":"d-none",
      "/order":"d-none",
      "/order-details/[id]":"d-flex",
      "/delivery-boy":"d-none",
      "/update-delivery-boy/[id]":"d-flex",
      "/new-delivery-boy":"d-flex",
      "/delivery-boy-details/[id]":"d-flex",
      "/helper":"d-none",
      "/helper-details/[id]":"d-flex",
      "/laundry":"d-none",
      "/laundry-details/[id]":"d-flex",
      "/customer":"d-none",
      "/customer-details/[id]":"d-flex",
      "/onboarding-request":"d-none",
      "/payment":"d-none",
      "/manage-categories":"d-none",
      "/manage-sub-categories":"d-none",
      "/manage-products":"d-none",
      "/location":"d-none",
      "/settings":"d-none",
      "/notification":"d-none"
     
   }

    return rought_location_Json[rout_path];

  }


  export function dbNotificationText(notification_parameter){
    let notoficationJson={
      "payment":"Payment",
      "order_picked_up":"Order picked up",
      "order_accept":"Order accept",
      "order_pickup_request":"Order picked up request",
      "rating":"Ratings",
      "order_delivered":"Order Delivered",
      "order_handover_to_ls":"Order hand over to LS",
      "order_ready":"Order ready",
      "order_picked_up_from_ls":"Order picked up from LS",
      "order_picked_up_by_db_or_helper":"Order picked up by DB/Helper",
      "order_issue_raised":"Order issue raised" 
     
   }
    return notoficationJson[notification_parameter];
  }

  export function lsNotificationText(notification_parameter){
    let notoficationJson={
      "payment":"Payment",
      "order_picked_up":"Order picked up",
      "order_accept":"Order accept",
      "order_pickup_request":"Order picked up request",
      "rating":"Ratings",
      "order_handover_to_ls":"Order hand over to LS",
      "order_ready":"Order ready",
      "order_picked_up_from_ls":"Order picked up from LS",
      "order_picked_up_by_db_or_helper":"Order picked up by DB/Helper",
      "order_issue_raised":"Order issue raised" ,
      "order_delivered":"Order Delivered",
     
   }
    return notoficationJson[notification_parameter];
  }

  export function custNotificationText(notification_parameter){
    let notoficationJson={
      "payment":"Payment",
      "order_picked_up":"Order picked up",
      "order_accept":"Order accept",
      "order_pickup_request":"Order picked up request",
      "rating":"Ratings",
      "order_handover_to_ls":"Order hand over to LS",
      "order_ready":"Order ready",
      "order_picked_up_from_ls":"Order picked up from LS",
      "order_picked_up_by_db_or_helper":"Order picked up by DB/Helper",
      "order_issue_raised":"Order issue raised" ,
      "order_delivered":"Order Delivered",
     
   }
    return notoficationJson[notification_parameter];
  }

  export function paiichartBackroundColor(paichartslug){
    let paichartslugJson={
      "wash-iron":"#E5E62B",
      "dry-clean":"#21D4C9",
      "steam-iron":"#EB5427",
      "iron-and-wash":"#791F06"
   }
    return paichartslugJson[paichartslug];
  }