describe('btnDirective', function() {
	var element, scope, $compile;

	beforeEach(module('myApp'));

	beforeEach(inject(function(_$rootScope_, _$compile_) {
		scope = _$rootScope_.$new();
		$compile = _$compile_;
	}));

	it('should add a btn class to the element', function() {
		element = $compile('<btn-directive></btn-directive>')(scope);
		expect(element.hasClass('btn')).to.be(true);
	});

	it('should not have class of btn-primary', function() {
		element = $compile('<btn-directive></btn-directive>')(scope);
		expect(element.hasClass('btn-primary')).to.be(false);
	});

	it('should have class of btn-primary', function() {
		element = $compile('<btn-directive type="submit"></btn-directive>')(scope);
		expect(element.hasClass('btn-primary')).to.be(true);
	});

	it('should have class of btn-lg', function() {
		element = $compile('<btn-directive type="submit" size="large"></btn-directive>')(scope);
		expect(element.hasClass('btn-lg')).to.be(true);
	});

	it('should have class of btn-xs', function() {
		element = $compile('<btn-directive type="submit" size="extra-small"></btn-directive>')(scope);
		expect(element.hasClass('btn-xs')).to.be(true);
	});

	it('should have class of btn-sm', function() {
		element = $compile('<btn-directive type="submit" size="larger"></btn-directive>')(scope);
		expect(element.hasClass('btn-sm')).to.be(true);
	});
});