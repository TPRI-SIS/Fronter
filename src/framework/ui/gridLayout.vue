<template>
    <div class="gridLayout">
        <slot></slot>
    </div>
</template>

<script>


let caculate=function(item)
{
    var offSetWidth = item.offsetLeft;
    var offSetHeight = item.offsetTop;
    
    var pWidth=item.parentNode.offsetWidth;
    var pHeight=item.parentNode.offsetHeight;
    

    var ele = $(item);

    ele.css({ "width":pWidth+ "px", "height": pHeight+"px" });
    var width, maxColumn = ele.width();
    var height, maxRow = ele.height();

 

    //获取网格的个数
    var columnCount = ele.data("columncount");
    var rowCount = ele.data("rowcount");
   console.log(columnCount)
    //使用相对值定义的个数
    var relateColumnCount = 0;
    var relateRowCount = 0;



    //每一个网格的长度
    var unitWidthArray = [];
    var unitHeightArray = [];



    var columnDefine = typeof (ele.data("columndefine")) == "undefined" ? ["*"] : ele.data("columndefine").split(",");
    var rowDefine = typeof (ele.data("rowdefine")) == "undefined" ? ["*"] : ele.data("rowdefine").split(",");


    //计算网格的长宽
    for (var i = 0; i < columnCount; i++) {
        if (typeof columnDefine[i] == "undefined" | columnDefine[i] == "*") {
            unitWidthArray.push("1*");
            relateColumnCount += 1;
        }
        else {
            if (columnDefine[i].indexOf("*") == -1) {
                maxColumn -= parseFloat(columnDefine[i]);
            }
            else {
                relateColumnCount += parseFloat(columnDefine[i].replace("*", ""));
            }
            unitWidthArray.push(columnDefine[i]);
        }
    }

    for (var i = 0; i < rowCount; i++) {
        if (typeof rowDefine[i] == "undefined" | rowDefine[i] == "*") {
            unitHeightArray.push("1*");
            relateRowCount += 1;
        }
        else {
            if (rowDefine[i].indexOf("*") == -1) {
                maxRow -= parseFloat(rowDefine[i]);
            }
            else {
                relateRowCount += parseFloat(rowDefine[i].replace("*", ""));
            }
            unitHeightArray.push(rowDefine[i]);
        }
    }


    //单位长度
    var unitWidth = maxColumn / (relateColumnCount != 0 ? relateColumnCount : columnCount);
    var unitHeight = maxRow / (relateRowCount != 0 ? relateRowCount : rowCount);

    console.log(unitWidth)

    $.each(unitWidthArray, function (index, item) {
        if (item.indexOf("*") != -1) {
            unitWidthArray[index] = parseFloat(item.replace("*", "")) * unitWidth;
        }
        else {
            unitWidthArray[index] = parseFloat(item);
        }
    });

    $.each(unitHeightArray, function (index, item) {
        if (item.indexOf("*") != -1) {
            unitHeightArray[index] = parseFloat(item.replace("*", "")) * unitHeight;
        }
        else {
            unitHeightArray[index] = parseFloat(item);
        }
    });


    //设置子元素的位置与大小
    $.each(ele.children(), function (index, item) {
        var ii = $(item);
        var c = typeof (ii.data("column")) == "undefined" ? 0 : ii.data("column");
        var r = typeof (ii.data("row")) == "undefined" ? 0 : ii.data("row");
        var cs = typeof (ii.data("columnspan")) == "undefined" ? 1 : ii.data("columnspan");
        var rs = typeof (ii.data("rowspan")) == "undefined" ? 1 : ii.data("rowspan");

        //获取之前的最大位置
        var getLength = function (array, index) {
            if (index == 0)
                return 0;
            else {
                var max = 0;
                for (var i = 0; i < index; i++) {
                    max += array[i];
                }
                return max;
            }
        }

        //获取跨越的长度
        var getSpan = function (array, start, end) {
            var max = 0;
            if (end == 1) {
                max = array[start];
                return max;
            }

            for (var i = start; i < end; i++) {
                max += array[i];
            }
            return max;
        }


        ii.css(
            {
                "position": "absolute",
                "left": offSetWidth + getLength(unitWidthArray, c) + "px",
                "top": offSetHeight + getLength(unitHeightArray, r) + "px",
                "width": getSpan(unitWidthArray, c, cs) + "px",
                "height": getSpan(unitHeightArray, r, rs) + "px"
            });
    });
}


export default {
  name: 'gridLayout',
  data(){
     return{
         slotArray:[],
         count:parseInt(this.eleCount),
         eleStyle:[]
     }

  },
  props:{
       eleCount:{
          type:String,
          default:'3'
      },
      rowDefine:{
           type: String,
           default: '1;1'
      },
      columnDefine:{
          type: String,
          default: '1;1'
      },
  },
  created (){
  
  },
  mounted (){
        var grids = $("div[data-role='grid']");
        $.each(grids, function (index, item) {
            caculate(item);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gridLayout {
    position: relative;
}

</style>
