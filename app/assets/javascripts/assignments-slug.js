(function() {
  let generateSlug;

  generateSlug = function(title) {
    var slug;
    if (!title) {
      return '';
    }
    slug = slugify(title);
    if (!slug) {
      slug = '-';
    }
    return slug;
  };

  $('.assignments').ready(function() {
    return $('#assignment_title').on('change paste keyup click', function() {
      return $('#assignment_slug').val(generateSlug($('#assignment_title').val()));
    });
  });

  $('.group_assignments').ready(function() {
    return $('#group_assignment_title').on('change paste keyup click', function() {
      return $('#group_assignment_slug').val(generateSlug($('#group_assignment_title').val()));
    });
  });
}).call(this);
