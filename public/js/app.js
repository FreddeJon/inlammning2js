$(document).ready(function () {
  $("#table_id").DataTable({
    ajax: {
      url: "/api/products",
      type: "GET",
      dataType: "json",
    },
    columnDefs: [
      {
        targets: [0],
        visible: false,
        searchable: false,
      },
    ],

    order: [[2, "asc"]],
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "price" },
      { data: "installationCost" },
      { data: "total" },
    ],
  });
});
